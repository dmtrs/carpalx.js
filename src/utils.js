module.exports.multiply = m = function(a) {
  return function(b) {
    return a*b;
  };
};

module.exports.sum = sum = function sum(a, b) {
  return a + b;
};

module.exports.head = head = function(list) {
    return list[0];
};

module.exports.tail = tail = function(arr) {
  var list = [];
  var idx = 0;
  var len = Math.max(0, arr.length - 1);
  while (idx < len) {
    list[idx] = arr[1 + idx];
    idx += 1;
  }
  return list;
};

module.exports.base = base = function(callback) {
  return function fn(triad, w) {
    if ( triad.length === 1 ) {
      return w[0](callback(triad[0]));
    }
    if ( triad.length === 0 ) {
      return 0;
    }
    return m(fn([head(triad)], [head(w)]))(sum(1, fn(tail(triad), tail(w))));
  };
};

module.exports.effort = effort = function(layout) {
  return base(layout.effort);
};

//Default model params
var w0 = m(1),
    wh = m(1),
    wr = m(1),
    wf = m(1);

// Maybe move to Layout ?
function Pf(i) {
  return [ 1, 0.5, 0, 0, 0, 0, 0.5,  1][i];
}
function Pr(i) {
  return [ 1.5, 0.5, 0, 1 ][i];
}
function Ph(hand) {
  return (hand === "L") ? 0 : 0;
}

module.exports.penalty = penalty = function(layout) {
  return base(function(char) {
      return sum(sum(w0(1), wh(Ph(layout.hand(char)))), sum(wr(Pr(layout.row(char))), wf(Pf(layout.finger(char)))));
  });
};

/**
 * Code taken from original Carpalx Perl program.
 * Calculate triad source path
 **/
module.exports.path = path = function(layout) {
  function ph(h) {
    var h1 = h[0],
      h2 = h[1],
      h3 = h[2];

    if ( h1 == h3 ) {
        return ( h2 == h3 ) ? 2 : 1;
    }
    return 0;
  }
  function pf(f, c) {
    var f1 = f[0],
      f2 = f[1],
      f3 = f[2];

    var c1 = c[0],
      c2 = c[1],
      c3 = c[2];

    if( f1 > f2 ) {
      if ( f2 > f3 ) {
        // 1 > 2 > 3 - monotonic all different - pf=0
        return 0;
      } else if ( f2 === f3 ) {
        // 1 > 2 = 3 - monotonic some different - pf=1
        return (c2 === c3) ? 1 : 6;
      } else if ( f3 == f1 ) {
        return 4;
      } else if ( f1 > f3 && f3 > f2 ) {
        // rolling
        return 2;
      } else {
        // not monotonic all different - pf=3
        return 3;
      }
    } else if ( f1 < f2 ) {
      if ( f2 < f3 ) {
        // 1 < 2 < 3 - monotonic all different - pf=0
        return 0;
      } else if ( f2 === f3 ) {
        // 1 < 2 = 3 - monotonic some different - pf=1
        return (c2 === c3) ? 1 : 6;
      } else if ( f3 === f1 ) {
        // 1 = 3 < 2 - not monotonic some different - pf=2
        return 4;
      } else if ( f1 < f3 && f3 < f2) {
        // rolling
        return 2;
      } else {
        //not monotonic all different - pf=3
        return 3;
      }
    } else if ( f1 == f2 ) {
      if ( f2 < f3 || f3 < f1 ) {
        // 1 = 2 < 3 
        // 3 < 1 = 2 - monotonic some different - pf=1
        return (c1 === c2) ? 1 : 6;
      } else if ( f2 == f3 ) {
        return (c1 !== c2 && c2 !== c3 && c1 !== c3) ? 7 : 5;
      }
    }
  }
  function pr(r) {
    var r1 = r[0],
      r2 = r[1],
      r3 = r[2];

    function drmax(r1, r2, r3) {

      var cmp = function(a, b) {
        if (a > b) return +1;
        if (a < b) return -1;
        return 0;
      };

      return head([ r1-r2, r1-r3, r2-r3 ].map(function(d) {
        return [ Math.abs(d), d ];
      }).sort(function(a, b) {
        return cmp(b[0], a[0]) || cmp(a[1], b[1]);
      }))[1];
    }

    if (r1 < r2) {
      if (r3 === r2) {
        // 1 < 2 = 3 - downward with rep
        return 1;
      } else if (r2 < r3) {
        // 1 < 2 < 3 - downward progression
        return 4;
      } else if (Math.abs(drmax(r1,r2,r3)) == 1) {
        return 3;
      } else {
        // all/some different - delta row > 1
        return (drmax(r1,r2,r3) < 0) ? 7 : 5;
      }
    } else if (r1 > r2) {
      if (r3 === r2) {
        // 1 > 2 = 3 - upward with rep
        return 2;
      } else if (r2 > r3) {
        // 1 > 2 > 3 - upward
        return 6;
      } else if (Math.abs(drmax(r1,r2,r3)) == 1) {
	      return 3;
      } else {
        return (drmax(r1,r2,r3) < 0) ? 7 : 5;
      }
    } else {
      // 1=2
      if(r2 > r3) {
        // 1 = 2 > 3 - upward with rep
	      return 2;
      } 
      // 1 = 2 < 3 - downward with rep or same
      return (r2 < r3) ? 1 : 0;
    }
  }

  function triplet(triad, cb) {
    return triad.split('').map(cb);
  }

  return function(triad) {
    return [
      ph(triplet(triad, layout.hand)),
      pr(triplet(triad, layout.row)),
      pf(triplet(triad, layout.finger), triad.split(''))
    ];
  };
};

module.exports.source = source = function(layout) {
  return function(triad, f) {
    var p = path(layout)(triad);
    return sum(f[0](p[0]), sum(f[1](p[1]), f[2](p[2])));
  };
};

// Default model params
var kb = m(0.3555),
  kp = m(0.6423),
  ks = m(0.4268),
  ws = [ m(1), m(0.3), m(0.3) ],
  wb = [ m(1), m(0.367), m(0.235) ],
  wp = [ m(1), m(0.367), m(0.235) ];


module.exports.e = function(layout) {
  return function(triad) {
    return sum(ks(source(layout)(triad, ws)), sum(kb(effort(layout)(triad, wb)), kp(penalty(layout)(triad, wp))));
  };
};

module.exports.N = function(count) {
  return m(1/(1+(count-3)));
};
