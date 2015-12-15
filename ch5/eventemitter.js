'use strict';

var Randomizer = require('./randomizer');

var randomizer = new Randomizer();

randomizer.start();

// write code to log tweets and errors are emitted,
// and close properly the process when end is emitted


// helpers

function closeProcess() {
  process.exit(0);
}