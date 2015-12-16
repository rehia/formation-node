'use strict';

var fs = require('fs');
var path = require('path');
var zlib = require('zlib');
var http = require('http');
var JSONStream = require('jsonstream');
var through = require('through2');

var zippedFile = path.join(__dirname, 'tweets.json.gz');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'application/json'});

  fs.createReadStream(zippedFile)
    .pipe(zlib.createGunzip())
    // pipe to JSONStream, to parse all objects using simply '*' as pattern
    // pipe to through2, using through.obj(), so you get a tweet as first parameter; modify the tweet, then push it, then call callback
    // pipe back to JSONStream using JSONStream.stringify and use these parameters to beautify it : '[\n', '\n,\n', '\n]\n', 2
    .pipe(response);
  response.end('not implemented exception'); // you should drop this line once done
}).listen(1343);
