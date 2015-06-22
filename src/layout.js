var curry = require('curry');

function Layout(chars) {
  var ef = [
    [ 2, 2, 2, 2, 2.5, 3, 2, 2, 2, 2, 2.5, 4, 6 ], //row 1
    [ 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2 ], //row 2 base
    [ 2, 2, 2, 2, 3.5, 2, 2, 2, 2, 2 ] //down row
  ];

  this.indexOf = curry(function(fn, key) {
    for(var i in chars) {
      var index = chars[i].indexOf(key);
      if ( index >= 0) {
        return fn(index, chars[i], ef[i]);
      }
    }
  });
}

/**
 * @return double baseline key effort
 **/
Layout.prototype.effort = function(key) {
  return this.indexOf(function(index, chars, efforts) {
    return efforts[index];
  })(key);
};

/**
 * @return integer finger assignment
 **/
Layout.prototype.finger = function(key) {
  return this.indexOf(function(index) {
    if (index === 4) {
      return 3;
    }
    if (index === 5) {
      return 6;
    }
    if (index > 8 ) {
      return 9;
    }
    return index;
  })(key);
};

/**
 * @return string hand assignment
 **/
Layout.prototype.hand = function(key) {
  return this.indexOf(function(index) {
    return index > 4 ? "R" : "L";
  })(key);
};

module.exports = Layout;
