'use strict';

var UserSession = require('./UserSession');
var TripDAO = require('./TripDAO');

function TripService() {}

TripService.prototype.getTripsByUser = function (user) {
  var tripList = [];
  var loggedUser = UserSession.getInstance().getLoggedUser();
  var isFriend = false;
  if (loggedUser != null) {
    var friends = user.getFriends();
    for (var i = 0; i < friends.length; i++) {
      var friend = friends[i];
      if (friend == loggedUser) {
        isFriend = true;
        break;
      }
    }
    if (isFriend) {
      tripList = TripDAO.findTripsByUser(user);
    }
    return tripList;
  } else {
    throw new Error('User not logged in.');
  }
};

module.exports = TripService;