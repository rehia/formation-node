'use strict';

function Randomizer() {
  this.started = false;
}

Randomizer.prototype.start = function start() {
  if (this.started) {
    return;
  }
  console.log('starting...');

  var actionDistribution = 'etttttetttteo';
  var actions = {t: 'tweet', e: 'error', o: 'end'};
  this.interval = setInterval(() => {
    var index = parseInt(Math.random() * actionDistribution.length, 10);
    this[actions[actionDistribution[index]]]();
  }, 500);
};

Randomizer.prototype.tweet = function tweet() {
  var tweet = {
    user: '@someone',
    message: 'I just tweeted something'
  };
  console.log('tweet');
  // emit tweet
};

Randomizer.prototype.error = function error() {
  var error = new Error('something bad just happened!!!');
  console.log('error');
  // emit error
};

Randomizer.prototype.end = function end() {
  console.log('end');
  // emit end
};

Randomizer.prototype.dispose = function dispose() {
  clearInterval(this.interval);
  this.started = false;
};

module.exports = Randomizer;