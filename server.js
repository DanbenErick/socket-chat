
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