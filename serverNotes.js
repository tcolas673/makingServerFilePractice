// The second form (creating an HTTP server yourself, instead of having Express create one for you) is useful if you want to reuse the HTTP server, for example to run socket.io within the same HTTP server instance:

// var express = require('express');
// var app     = express();
// var server  = require('http').createServer(app);
// var io      = require('socket.io').listen(server);
// ...
// server.listen(1234);


// var express   = require('express');
// var app       = express();

// // app.use/routes/etc...

// var server    = app.listen(3033);
// var io        = require('socket.io').listen(server);

// io.sockets.on('connection', function (socket) {
//   ...
// });


// The app returned by express() is in fact a JavaScript Function, DESIGNED TO BE PASSED to Node’s HTTP servers as a callback to handle requests.
// This makes it easy to provide both HTTP and HTTPS versions of your app with the same code base, as the app does not inherit from these (it is simply a callback):
// http.createServer(app).listen(80);
// https.createServer(options, app).listen(443);
// The app.listen() method returns an http.Server object and (for HTTP) is a convenience method for the following:
// app.listen = function() {
//   var server = http.createServer(this);
//   return server.listen.apply(server, arguments);
// };
