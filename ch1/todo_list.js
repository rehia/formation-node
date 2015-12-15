/* jslint node: true */
"use strict";

var crypto = require('crypto');

function TodoList() {}

function newId() {
  var date = new Date().toISOString();
  return crypto.createHash('sha1').update(date).digest('hex').substr(0, 7);
}

module.exports = TodoList;