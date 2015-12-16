'use strict';

var fs = require('fs');
var path = require('path');
var zlib = require('zlib');
var http = require('http');

var zippedFile = path.join(__dirname, 'tweets.json.gz');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'application/json'});

  // create readstream on zippedFile
    // pipe to unzip using createGunzip
    // pipe result to http response
  response.end('not implemented exception'); // you should drop this line once done
}).listen(1342);
