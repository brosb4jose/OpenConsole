'use strict';

/**
 * Module dependencies.
 */
var express = require('express'),
    fs = require('fs'),
    http = require('http'),
    passport = require('passport'),
    logger = require('mean-logger')

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Load configurations
// Set the node enviornment variable if not set before
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Initializing system variables 
var config = require('./config/config'),
    mongoose = require('mongoose');

// Bootstrap db connection
var db = mongoose.connect(config.db);

// Bootstrap models
var models_path = __dirname + '/app/models';
var walk = function(path) {
    fs.readdirSync(path).forEach(function(file) {
        var newPath = path + '/' + file;
        var stat = fs.statSync(newPath);
        if (stat.isFile()) {
            if (/(.*)\.(js$|coffee$)/.test(file)) {
                require(newPath);
            }
        } else if (stat.isDirectory()) {
            walk(newPath);
        }
    });
};
walk(models_path);

// Bootstrap passport config
require('./config/passport')(passport);

var app = express();

// Express settings
require('./config/express')(app, passport, db);

// Bootstrap routes
var routes_path = __dirname + '/app/routes';
var walk = function(path) {
    fs.readdirSync(path).forEach(function(file) {
        var newPath = path + '/' + file;
        var stat = fs.statSync(newPath);
        if (stat.isFile()) {
            if (/(.*)\.(js$|coffee$)/.test(file)) {
                require(newPath)(app, passport);
            }
        // We skip the app/routes/middlewares directory as it is meant to be
        // used and shared by routes as further middlewares and is not a 
        // route by itself
        } else if (stat.isDirectory() && file !== 'middlewares') {
            walk(newPath);
        }
    });
};
walk(routes_path);

// Start the app by listening on <port>
var port = process.env.PORT || config.port;

var server = http.createServer(app);
var io = require('socket.io').listen(server, {origins: '*:*'});

server.listen(port)

console.log('Express app started on port ' + port);

io.sockets.on('connection', function(socket) {
    console.log('socket connected!');

    socket.on('startRoom', function(){
        var room = Math.floor(Math.random() * 8999 + 1000)
        console.log('Starting Game Room #:' + room)
        // Create GameRoom, send ID from callback
        socket.emit('getRoom', {roomID: room})
    })

    socket.on('register', function(data){
        console.log('Player ' + data.name + ' is joining the GameRoom')
        // Save Name, create player, send ID from callback
        socket.emit('getID', data.name)
    })
});



// Initializing logger
logger.init(app, passport, mongoose);

// Expose app
exports = module.exports = app;
