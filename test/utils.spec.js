var utils = require('../src/utils');
var qwerty = require('../src/layout').qwerty;
var dvorak = require('../src/layout').dvorak;
var colemak = require('../src/layout').colemak;

describe('utils.multiply', function() {
  it('should provide a function', function() {
    var m = utils.multiply(5);
    m.should.be.instanceOf(Function);
    m(2).should.be.equals(10);
  });
});

describe('utils.base', function() {
  it('should be calculate base effort', function() {
    var base = utils.base(function() { return 1; });
    base.should.be.an.instanceOf(Function);
    var w = utils.multiply;
    base("abc", [ m(1), m(2), m(3) ]).should.be.equals(9);
  });

  it('should calculate default qwerty effort', function() {
    var base = utils.base(qwerty.effort);
    var w = utils.multiply;
    var defaults = [ m(1), m(0.367), m(0.235) ];
    base("asd", defaults).should.be.equals(0);
    base("zaq", defaults).should.be.equals(2.0);
    base("zqa", defaults).should.be.equals(3.468);
    base("zzz", defaults).should.be.equals(4.15796);

    base("fjo", defaults).should.be.equals(base("jfy", defaults));
  });
});

describe('utils.penalty', function() {
  it('should be calculate default qwerty penalty', function() {
    var penalty = utils.penalty(qwerty);
    var defaults = [ m(1), m(1), m(1) ];
    penalty("ggg", defaults).should.be.equals(7.125);
  });
});

describe('utils.path', function() {
  it('should calculate default qwerty source path', function() {
    var p = utils.path(qwerty);
    //ph0
    p("adh").should.be.deep.equals([ 0, 0, 0 ]);
    p("adh").should.be.deep.equals([ 0, 0, 0 ]);
    p("aah").should.be.deep.equals([ 0, 0, 1 ]);
    p("abm").should.be.deep.equals([ 0, 1, 0 ]);
    p("aam").should.be.deep.equals([ 0, 1, 1 ]);
    p("akh").should.be.deep.equals([ 0, 0, 2 ]);
    p("akm").should.be.deep.equals([ 0, 1, 2 ]);
    p("adi").should.be.deep.equals([ 0, 2, 0 ]);
    p("aai").should.be.deep.equals([ 0, 2, 1 ]);
    p("aiu").should.be.deep.equals([ 0, 2, 2 ]);
    p("bcm").should.be.deep.equals([ 0, 0, 3 ]);
    p("dam").should.be.deep.equals([ 0, 1, 3 ]);
    p("bah").should.be.deep.equals([ 0, 2, 3 ]);
    p("abh").should.be.deep.equals([ 0, 3, 0 ]);
    p("aih").should.be.deep.equals([ 0, 3, 2 ]);
    p("bam").should.be.deep.equals([ 0, 3, 3 ]);
    p("efm").should.be.deep.equals([ 0, 4, 0 ]);
    p("ekm").should.be.deep.equals([ 0, 4, 2 ]);
    p("eam").should.be.deep.equals([ 0, 4, 3 ]);
    p("abi").should.be.deep.equals([ 0, 5, 0 ]);
    p("bih").should.be.deep.equals([ 0, 5, 2 ]);
    p("beh").should.be.deep.equals([ 0, 5, 3 ]);
    p("ahj").should.be.deep.equals([ 0, 0, 6 ]);
    p("ahm").should.be.deep.equals([ 0, 1, 6 ]);
    p("ahu").should.be.deep.equals([ 0, 2, 6 ]);
    p("aik").should.be.deep.equals([ 0, 3, 6 ]);
    p("edm").should.be.deep.equals([ 0, 4, 6 ]);
    p("amu").should.be.deep.equals([ 0, 5, 6 ]);
    p("bhi").should.be.deep.equals([ 0, 6, 0 ]);
    p("bku").should.be.deep.equals([ 0, 6, 2 ]);
    p("bai").should.be.deep.equals([ 0, 6, 3 ]);
    p("bfi").should.be.deep.equals([ 0, 6, 6 ]);
    p("aem").should.be.deep.equals([ 0, 7, 0 ]);
    p("aim").should.be.deep.equals([ 0, 7, 2 ]);
    p("bem").should.be.deep.equals([ 0, 7, 3 ]);
    p("aqm").should.be.deep.equals([ 0, 7, 6 ]);
    //ph1
    p("ahd").should.be.deep.equals([ 1, 0, 2 ]);
    p("ahb").should.be.deep.equals([ 1, 1, 2 ]);
    p("ahe").should.be.deep.equals([ 1, 2, 2 ]);
    p("bmc").should.be.deep.equals([ 1, 0, 3 ]);
    p("dhx").should.be.deep.equals([ 1, 1, 3 ]);
    p("bha").should.be.deep.equals([ 1, 2, 3 ]);
    p("aid").should.be.deep.equals([ 1, 3, 2 ]);
    p("bhc").should.be.deep.equals([ 1, 3, 3 ]);
    p("aha").should.be.deep.equals([ 1, 0, 4 ]);
    p("ahz").should.be.deep.equals([ 1, 1, 4 ]);
    p("ahq").should.be.deep.equals([ 1, 2, 4 ]);
    p("aia").should.be.deep.equals([ 1, 3, 4 ]);
    p("ehb").should.be.deep.equals([ 1, 4, 2 ]);
    p("ehx").should.be.deep.equals([ 1, 4, 3 ]);
    p("ehc").should.be.deep.equals([ 1, 4, 4 ]);
    p("ame").should.be.deep.equals([ 1, 5, 2 ]);
    p("bia").should.be.deep.equals([ 1, 5, 3 ]);
    p("amq").should.be.deep.equals([ 1, 5, 4 ]);
    p("chr").should.be.deep.equals([ 1, 6, 2 ]);
    p("bhe").should.be.deep.equals([ 1, 6, 3 ]);
    p("bhr").should.be.deep.equals([ 1, 6, 4 ]);
    p("aib").should.be.deep.equals([ 1, 7, 2 ]);
    p("bic").should.be.deep.equals([ 1, 7, 3 ]);
    p("aiz").should.be.deep.equals([ 1, 7, 4 ]);
    //ph2
    p("adf").should.be.deep.equals([ 2, 0, 0 ]);
    p("aad").should.be.deep.equals([ 2, 0, 1 ]);
    p("acb").should.be.deep.equals([ 2, 1, 0 ]);
    p("aab").should.be.deep.equals([ 2, 1, 1 ]);
    p("ads").should.be.deep.equals([ 2, 0, 2 ]);
    p("abc").should.be.deep.equals([ 2, 1, 2 ]);
    p("adr").should.be.deep.equals([ 2, 2, 0 ]);
    p("aae").should.be.deep.equals([ 2, 2, 1 ]);
    p("adw").should.be.deep.equals([ 2, 2, 2 ]);
    p("cbx").should.be.deep.equals([ 2, 0, 3 ]);
    p("dab").should.be.deep.equals([ 2, 1, 3 ]);
    p("caf").should.be.deep.equals([ 2, 2, 3 ]);
    p("acf").should.be.deep.equals([ 2, 3, 0 ]);
    p("abd").should.be.deep.equals([ 2, 3, 2 ]);
    p("cab").should.be.deep.equals([ 2, 3, 3 ]);
    p("ada").should.be.deep.equals([ 2, 0, 4 ]);
    p("abz").should.be.deep.equals([ 2, 1, 4 ]);
    p("adq").should.be.deep.equals([ 2, 2, 4 ]);
    p("aba").should.be.deep.equals([ 2, 3, 4 ]);
    p("esz").should.be.deep.equals([ 2, 4, 0 ]);
    p("eax").should.be.deep.equals([ 2, 4, 2 ]);
    p("eab").should.be.deep.equals([ 2, 4, 3 ]);
    p("eac").should.be.deep.equals([ 2, 4, 4 ]);
    p("bbv").should.be.deep.equals([ 2, 0, 5 ]);
    p("aaz").should.be.deep.equals([ 2, 1, 5 ]);
    p("aaq").should.be.deep.equals([ 2, 2, 5 ]);
    p("aqa").should.be.deep.equals([ 2, 3, 5 ]);
    p("acr").should.be.deep.equals([ 2, 5, 0 ]);
    p("abe").should.be.deep.equals([ 2, 5, 2 ]);
    p("cqf").should.be.deep.equals([ 2, 5, 3 ]);
    p("abq").should.be.deep.equals([ 2, 5, 4 ]);
    p("afg").should.be.deep.equals([ 2, 0, 6 ]);
    p("abv").should.be.deep.equals([ 2, 1, 6 ]);
    p("ade").should.be.deep.equals([ 2, 2, 6 ]);
    p("abf").should.be.deep.equals([ 2, 3, 6 ]);
    p("eaz").should.be.deep.equals([ 2, 4, 6 ]);
    p("abr").should.be.deep.equals([ 2, 5, 6 ]);
    p("bdq").should.be.deep.equals([ 2, 6, 0 ]);
    p("bae").should.be.deep.equals([ 2, 6, 2 ]);
    p("car").should.be.deep.equals([ 2, 6, 3 ]);
    p("bar").should.be.deep.equals([ 2, 6, 4 ]);
    p("baq").should.be.deep.equals([ 2, 6, 6 ]);
    p("fbv").should.be.deep.equals([ 2, 1, 7 ]);
    p("bfg").should.be.deep.equals([ 2, 2, 7 ]);
    p("bfv").should.be.deep.equals([ 2, 3, 7 ]);
    p("edc").should.be.deep.equals([ 2, 4, 7 ]);
    p("azq").should.be.deep.equals([ 2, 5, 7 ]);
    p("bfr").should.be.deep.equals([ 2, 6, 7 ]);
    p("aeb").should.be.deep.equals([ 2, 7, 0 ]);
    p("aex").should.be.deep.equals([ 2, 7, 2 ]);
    p("cqb").should.be.deep.equals([ 2, 7, 3 ]);
    p("aez").should.be.deep.equals([ 2, 7, 4 ]);
    p("brb").should.be.deep.equals([ 2, 7, 5 ]);
    p("aec").should.be.deep.equals([ 2, 7, 6 ]);
    p("aqz").should.be.deep.equals([ 2, 7, 7 ]);
  });
});

describe('utils.source()', function() {
  it('should calculate source path', function() {
    var source = utils.source(qwerty);
    var defaults = [ m(1), m(0.3), m(0.3) ];
    source("abz", defaults).should.be.equals(3.5);
  });
});
