var qwerty = require('../src/layout').qwerty;

describe('Layout', function() {
  
  describe('layout.finger(char)', function() {
    it('should return finger assignment', function() {
      qwerty.finger("q").should.be.equals(0);
      qwerty.finger("w").should.be.equals(1);
      qwerty.finger("e").should.be.equals(2);
      qwerty.finger("r").should.be.equals(3);
      qwerty.finger("t").should.be.equals(3);
      qwerty.finger("y").should.be.equals(6);
      qwerty.finger("u").should.be.equals(6);
      qwerty.finger("i").should.be.equals(7);
      qwerty.finger("o").should.be.equals(8);
      qwerty.finger("p").should.be.equals(9);
      qwerty.finger("[").should.be.equals(9);
      qwerty.finger("]").should.be.equals(9);
    });
  });

  describe('layout.hand(char)', function() {
    it('should return finger assignment', function() {
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

  describe('layout.effort(char)', function() {
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
});
