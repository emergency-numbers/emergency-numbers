
var country = require('emergency-numbers');
var assert = require('assert');

describe('Emergency numbers', function () {

  it ('saved by reference', function(done) {
    var norway = country('Norway');
    assert('object' == typeof norway.numbers);
    assert(112 == norway.numbers.police);
    done();
  });

});

