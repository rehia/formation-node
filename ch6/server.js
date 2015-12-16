'use strict';

var http = require('http');
var url = require('url');

// create a server, using http/createServer, which renders :
// the image logo.png when request is http://.../logo
// the content of foo.json (as json response) when request is http://.../foo
// the text 'Hello World!' by default

// url.parse(request.url) could be helpful to find the request path
// don't forget header on content-type (application/json, image/png, text/plain) !
// and listen on a port of your choice
