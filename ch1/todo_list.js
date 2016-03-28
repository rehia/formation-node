/* jslint node: true */
"use strict";

var crypto = require('crypto');

function TodoList() {

}

function newId() {
  var date = new Date().toISOString();
  return crypto.createHash('sha1').update(date).digest('hex').substr(0, 7);
}

TodoList.prototype.create = function create(todo) {
  throw new Error('please implement this function...');
};

TodoList.prototype.toString = function toString() {
  throw new Error('please implement this function...');
};

TodoList.prototype.markAsDone = function markAsDone(id) {
  throw new Error('please implement this function...');
};

module.exports = TodoList;