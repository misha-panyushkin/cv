var compress = require('compression');
var express = require('express');
var http = require('http');
var config = require('./configuration/config');
var logger = require('./logs/manager');

var app = express();
var server = http.Server(app);

var path = require('path');

app.use(compress());
app.use(express.static(path.join(__dirname, '/public')));

server.listen(config.clientPort, function () {
	var location = server.address();
	logger.start('Successfully started at address', location.address + ':' + location.port, '.');
});