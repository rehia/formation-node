'use strict';

var ___ = 'noop';

console.log('#expected');
console.log(___);
console.log(___);
console.log(___);
console.log(___);

console.log('#actual');

setTimeout(function () {
  console.log('foo');
}, 10);

setTimeout(function () {
  console.log('bar');
}, 0);

setImmediate(function () {
  console.log('baz');
});

process.nextTick(function () {
  console.log('qux');
});