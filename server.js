
// const http = require('http');
// const express = require('express');
// const app = module.exports.app = express();
// const port = process.env.PORT || 8080;
// var server = http.createServer(app);


// const io = require('socket.io')(server);



    

// // var io = require('socket.io').listen(server);  //pass a http.Server instance
// server.listen(80);  //listen on port 80

// //now you can use app and io


// io.on('connection', (socket) => {
//     socket.emit('connect', {message: 'a new client connected'})
// })  

// socket.on('chat', message => {
//     // console.log('From client: ', message)
//     io.emit('chat', message)
//  })





const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 9000;
app.get('/', function(req, res) {
   res.sendfile('index.html');
});
io.on('connection', (socket) => {
  console.log('user connected');
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
  socket.on('chat', message => {
      // console.log('From client: ', message)
      io.emit('chat', `Mensaje recibido: ${message}`)
   })
})


server.listen(port, function() {
  console.log(`Listening on port ${port}`);
});