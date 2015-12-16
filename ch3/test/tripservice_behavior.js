/* jslint node: true */
/* jslint expr: true */
/*global describe, it, before, beforeEach, after, afterEach */
"use strict";

var util = require('util');

var chai = require('chai');
// choose the one you prefer
var should = chai.should();
var expect = chai.expect;
var assert = chai.assert;

var sinon = require('sinon');
var sinon_chai = require('sinon-chai');
chai.use(sinon_chai);

var TripService = require('../tripservice');

describe('TripService behavior', function () {

  var tripService;

  beforeEach(function () {
    tripService = new TestableTripService();
  });

  it('should raise an error when guest', function () {

  });

  it('should return no trip when not friends', function () {
    
  });

  it('should return friends’s trips', function () {

  });
});


function TestableTripService() {
  TripService.apply(this, arguments);
}

util.inherits(TestableTripService, TripService);

TestableTripService.prototype._findTripsByUser = function (user) {
  return user.trips;
};

TestableTripService.prototype._getLoggedUser = function () {

};