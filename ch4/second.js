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

fs.readFile(path.join(__dirname, 'foo.json'), function () {
  console.log('qux');
});

[1].forEach(function () {
  console.log('bar');
});

console.log('baz');

setImmediate(function () {
  console.log('foo');
});

