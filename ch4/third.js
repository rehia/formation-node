'use strict';

var fs = require('fs');
var path = require('path');
var ___ = 'noop';

console.log('#expected');
console.log(___);
console.log(___);
console.log(___);
console.log(___);

console.log('#actual');

var words = ['foo', 'bar', 'baz', 'qux', 'quux', 'grault', 'garply'];
for (var i = 0; i < 4; i++) {
  setImmediate(function () {
    console.log(words[i]);
  })
}

