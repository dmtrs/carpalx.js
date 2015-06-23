var curry = require('curry');

function Layout(chars) {
  var ef = [
    [ 2, 2, 2, 2, 2.5, 3, 2, 2, 2, 2, 2.5, 4, 6 ], //row 1
    [ 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2 ], //row 2 base
    [ 2, 2, 2, 2, 3.5, 2, 2, 2, 2, 2 ] //down row
  ];

  var indexOf = curry(function(fn, key) {
    for(var i in chars) {
      var index = chars[i].indexOf(key);
      if ( index >= 0) {
        return fn(index, chars[i], ef[i]);
      }
    }
  });

  /**
   * @return double baseline key effort
   **/
  this.effort = indexOf(function(index, chars, efforts) {
      return efforts[index];
  });

  /**
   * @return integer finger assignment
   **/
  this.finger = indexOf(function(index) {
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
  });

  /**
   * @return string hand assignment
   **/
  this.hand = indexOf(function(index) {
    return index > 4 ? "R" : "L";
  });
}

module.exports = Layout;

module.exports.qwerty = new Layout([
      ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
      ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
      ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"]
]);
