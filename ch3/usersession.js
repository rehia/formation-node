'use strict';

function UserSession() {}

UserSession.prototype.getLoggedUser = function() {
  throw new Error("UserSession.getLoggedUser() should not be called in an unit test");
};

var userSession = new UserSession();

module.exports = {
  getInstance: function () {
    return userSession;
  }
};
