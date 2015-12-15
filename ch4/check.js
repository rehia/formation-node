#!/usr/bin/env node
'use strict';

var program = require('commander');
var fork = require('child_process').fork;
var assert = require('assert');
var colors = require('colors');

program
  .version('0.0.1')
  .option('-s, --script <script>', 'script to check')
  .option('-d, --debug', 'debug script and spoil the answer')
  .parse(process.argv);

if (!program.script) {
  program.help();
}

var log = '';
fork(program.script, [], { silent: true }).stdout
  .on('data', function (chunk) {
    log += chunk;
  }).on('end', function () {
    check(log);
  });

function check(log) {
  var expected = new Fill();
  var actual = new Fill();
  var current = expected;
  log.split('\n').forEach(function (value) {
    if (value === '#expected') {
      current = expected;
    } else if (value === '#actual') {
      current = actual;
    } else {
      current.append(value);
    }
  });
  try {
    assert.equal(expected.toString(), actual.toString());
    console.log("’seems that everything is ok ! good job !".green);
  } catch (error) {
    console.error('expected output is different than actual. try something else...'.red);
    if (program.debug) {
      console.log(error.message);
    }
  }
}

function Fill() {
  this.values = [];
  this.append = function (value) {
    if (value) {
      this.values.push(value);
    }
  };
  this.toString = function () {
    return this.values.join();
  };
}