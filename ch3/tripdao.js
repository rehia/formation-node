'use strict';

function TripDAO() {}

TripDAO._findTripsByUser = function(user) {
  throw new Error("TripDAO should not be invoked on an unit test.");
};

module.exports = TripDAO;
