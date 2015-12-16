'use strict';

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('view engine', 'jade');

// on GET /, just send Hello World!

// mark public directory to be used for static resources

var title = 'Hey!';
var message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
// on GET /hello/:name, render hello.jade, and provide a title, a header, and a message
// for the header, render 'Hello <name>!'

// on GET /chat send public/chat.html by using response.sendFile(__dirname + '/public/chat.html');

// on a socket.io 'connection' evet, listen socket 'chat message' event,
// and broadcast this event (with same name), using io.emit(), with the message included

// listen on the port of your choice