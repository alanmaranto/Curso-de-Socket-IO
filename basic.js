//we need http because we dont have express
const http = require("http");

// Socket io 
const socketio = require("socket.io");

// Server
const server = http.createServer((req, res) => {
  res.end("I am connected");
});

const io = socketio(server);

io.on("connection", (socket, req) => {
  socket.emit('welcome', 'welcome to the socket server');
  socket.on("message", (msg) => {
    console.log(msg);
  });
});

server.listen(8000);
