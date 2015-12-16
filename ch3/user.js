'use strict';

function User() {
  this.trips = [];
  this.friends = [];
}

User.prototype.addTrip = function addTrip(trip) {
  this.trips.push(trip);
};

User.prototype.addFriend = function addFriend(user) {
  this.friends.push(user);
};

module.exports = User;
