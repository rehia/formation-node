'use strict';

function asyncCalculator(a, b, callback) {
  setImmediate(function () {
    callback((a + 1) + (b + 1));
  });
}

function promisedDivider(a, b) {
  return new Promise(function (fulfill, reject) {
    setImmediate(function () {
      if (!b) {
        reject(new Error('could not divide by zero'))
      }
      fulfill(a / b);
    });
  })
}

module.exports = {
  asyncCalculator: asyncCalculator,
  promisedDivider: promisedDivider
};