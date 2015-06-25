function Layout(chars, name) {
  var base = [
    [ 2, 2, 2, 2, 2.5, 3, 2, 2, 2, 2, 2.5, 4, 6 ], //row 1
    [ 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2 ], //row 2 base
    [ 2, 2, 2, 2, 3.5, 2, 2, 2, 2, 2 ] //down row
  ];

  function indexOf(fn) {
    return function(key) {
      for(var i in chars) {
        var j = chars[i].indexOf(key);
        if ( j >= 0) {
            return fn(i, j);
        }
      }
    };
  }

  this.row = indexOf(function(i, j) {
      return parseInt(i);
  });

  /**
   * @return double baseline key effort
   **/
  this.effort = indexOf(function(i, j) {
      return base[i][j];
  });

  /**
   * @return integer finger assignment
   **/
  this.finger = indexOf(function(i, j) {
    if (j > 8 ) {
      return 7;
    }
    if (j === 4) {
      return 3;
    }
    if (j === 5) {
      return 4;
    }
    if( j > 5 ) {
      return j-2;
    }
    return parseInt(j);
  });

  /**
   * @return string hand assignment
   **/
  this.hand = indexOf(function(i, j) {
    return j > 4 ? "R" : "L";
  });

  this.name = function() {
    return name;
  };
}

module.exports = Layout;

module.exports.qwerty = new Layout([
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
  ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"]
], 'qwerty');

module.exports.dvorak = new Layout([
  ["'", ",", ".", "p", "y", "f", "g", "c", "r", "l", "/", "="],
  ["a", "o", "e", "u", "i", "d", "h", "t", "n", "s", "-"],
  [":", "q", "j", "k", "x", "b", "m", "w", "v", "z"],
], 'dvorak');

module.exports.colemak = new Layout([
  [ "q", "w", "f", "p", "g", "j", "l", "u", "y", ";", "[", "]" ],
  [ "a", "r", "s", "t", "d", "h", "n", "e", "i", "o", "`" ],
  [ "z", "x", "c", "v", "b", "k", "m", ",", ".", "/" ]
], 'colemak');
