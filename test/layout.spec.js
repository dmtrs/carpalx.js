var Layout = require('../src/layout').Layout;
var qwerty = require('../src/layout').qwerty;

describe('Layout', function() {
  var colemak;
  before(function() {
    colemak = new Layout([
        "qwfpgjluy;[]\\",
        "arstdhneio`",
        "zxcvbkm,./"
      ].map(function(row) { return row.split(''); }), 'colemak1'
    );
  });
  describe('new', function() {
    it('should return finger assignment', function() {
      colemak.finger("f").should.be.equals(2);
    });
    it('should new Layout return finger assignment', function() {
      colemak.hand("f").should.be.equals("L");
    });
    it('should new Layout return finger assignment', function() {
      colemak.effort("f").should.be.equals(2.0);
    });
    it('should new Layout return name', function() {
      colemak.name().should.be.equals('colemak1');
    });
    it('should new Layout return row of char', function() {
        colemak.row("f").should.be.equals(0);
    });
  });
});
  
describe('qwerty.row(char)', function() {
  it('should return finger assignment', function() {
    qwerty.row("q").should.be.equals(0);
    qwerty.row("a").should.be.equals(1);
    qwerty.row("z").should.be.equals(2);
  });
});
describe('qwerty.finger(char)', function() {
  it('should return finger assignment', function() {
    qwerty.finger("q").should.be.equals(0);
    qwerty.finger("w").should.be.equals(1);
    qwerty.finger("e").should.be.equals(2);
    qwerty.finger("r").should.be.equals(3);
    qwerty.finger("t").should.be.equals(3);
    qwerty.finger("y").should.be.equals(4);
    qwerty.finger("u").should.be.equals(4);
    qwerty.finger("i").should.be.equals(5);
    qwerty.finger("o").should.be.equals(6);
    qwerty.finger("p").should.be.equals(7);
    qwerty.finger("[").should.be.equals(7);
    qwerty.finger("]").should.be.equals(7);
  });
});

describe('qwerty.hand(char)', function() {
  it('should return hand assignment', function() {
    qwerty.hand("q").should.be.equals("L");
    qwerty.hand("w").should.be.equals("L");
    qwerty.hand("e").should.be.equals("L");
    qwerty.hand("r").should.be.equals("L");
    qwerty.hand("t").should.be.equals("L");
    qwerty.hand("y").should.be.equals("R");
    qwerty.hand("u").should.be.equals("R");
    qwerty.hand("i").should.be.equals("R");
    qwerty.hand("o").should.be.equals("R");
    qwerty.hand("p").should.be.equals("R");
    qwerty.hand("[").should.be.equals("R");
    qwerty.hand("]").should.be.equals("R");
  });
});

describe('qwerty.effort(char)', function() {
  it('should return baseline key effort', function() {
    qwerty.effort("q").should.be.equals(2.0);
    qwerty.effort("w").should.be.equals(2.0);
    qwerty.effort("e").should.be.equals(2.0);
    qwerty.effort("r").should.be.equals(2.0);
    qwerty.effort("t").should.be.equals(2.5);
    qwerty.effort("y").should.be.equals(3.0);
    qwerty.effort("u").should.be.equals(2.0);
    qwerty.effort("i").should.be.equals(2.0);
    qwerty.effort("o").should.be.equals(2.0);
    qwerty.effort("p").should.be.equals(2.0);
    qwerty.effort("[").should.be.equals(2.5);
    qwerty.effort("]").should.be.equals(4.0);
  });
});
