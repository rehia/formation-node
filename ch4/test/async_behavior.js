/* jslint node: true */
/* jslint expr: true */
/*global describe, it, before, beforeEach, after, afterEach */
"use strict";

var chai = require('chai');
var should = chai.should();
var assert = chai.assert;
var chai_as_promised = require('chai-as-promised');
chai.use(chai_as_promised);

var asyncCalculator = require('../async_calc').asyncCalculator;
var promisedDivider = require('../async_calc').promisedDivider;

describe('Async code behavior', function () {

  it('should calculate asynchronously', function () {
    //asyncCalculator(10, 30)...
    var result;
    result.should.equal(42);
  });

  it('should test a promise that fulfills value', function () {
    // promisedDivider(18, 3)...
    assert.fail();
  });

  it('should test a promise that fails', function () {
    // promisedDivider(5, 0)... return an Error
    assert.fail();
  });

});