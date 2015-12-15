'use strict';

var ___ = 'noop';

console.log('#expected');
console.log(___);

console.log('#actual');

callAsync(10, function (firstValue) {
  var x = 1 + firstValue;
  callAsync(30, function (secondValue) {
    var y = 1 + secondValue;
    callAsync(x + y, function (finalValue) {
      console.log(finalValue);
    });
  });
});


function callAsync(value, callback) {
  setImmediate(function () {
    callback(value);
  });
}