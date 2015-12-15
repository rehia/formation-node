'use strict';

var assert = require('assert');
var colors = require('colors');

// First part

var x;
callAsync(10)
  .then(function (firstValue) {
    x = 1 + firstValue;
    return callAsync(30);
  }).then(function (secondValue) {
    var y = 1 + secondValue;
    return callAsync(x + y);
  }).then(function (finalValue) {
    assert.equal(finalValue, 42, 'first part looks like it is not the right result...'.red);

    console.log('first part looks OK now !'.green);
  }).catch(function (error) {
    console.log('first part does not seem to work... :/'.red);
    console.error(error.message);
  });


// Change goes down there !!!
function callAsync(value, callback) {
  setImmediate(function () {
    callback(value);
  });
}

// Second part

Promise.all([10, 30].map(function (value) {
  // write here the necessary call

})).then(function (values) {
  assert.equal(values.reduce(function (sum, current) {
    return sum += current;
  }, 0), 42, 'second part looks like it is not the right result...'.red);

  console.log('second part looks OK now !'.green);
}).catch(function (error) {
  console.log('second part does not seem to work... :/'.red);
  console.error(error.message);
});
