'use strict';

var fs = require('fs');
var path = require('path');
var crypto = require('crypto');
var zlib = require('zlib');

var config = require('./config.json');

var originalFile = '';
// use path to combine __dirname and 'tweets.json' to create a correct path
var cryptedFile = '';
// use path to combine __dirname and 'tweets.json.crypted.gz' to create a correct path

// open a readstream on originalFile, using createReadStream, with { encoding: 'utf8' } as options
  // pipe to a cipher using createCipher in crypto, with provided algorithm and password from config
  // then pipe to a zip stream using createGzip in zlib
  // then pipe to a write stream in cryptedFile
