// this is just a dummy server to test the terminal on
// code taken from https://hub.packtpub.com/making-simple-web-based-ssh-client-using-nodejs-and-socketio/
// to be modified and included on my own server

console.log('Just Read The Instructions')

var express = require('express');
var http = require('http');
var fs = require('fs');
var pty = require('node-pty');

var app = express()
app.use("/",express.static("./"));
var server = http.createServer(app).listen(8080)
var io = require('socket.io')(server);

// When a new socket connects
io.on('connection', function(socket){
    // Create terminal
    var term = pty.spawn('sh', [], {
       name: 'xterm-color',
       cols: 80,
       rows: 30,
       cwd: process.env.HOME,
       env: process.env
    });
    // Listen on the terminal for output and send it to the client
   //  pty.on('data', function(data){
   //     socket.emit('output', data);
   //  });
    // Listen on the client and send any input to the terminal
    socket.on('input', function(data){
       term.write(data);
    });
    // When socket disconnects, destroy the terminal
    socket.on("disconnect", function(){
       term.destroy();
       console.log("bye");
    });
});