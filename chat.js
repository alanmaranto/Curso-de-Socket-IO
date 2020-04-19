const express = require("express");
const app = express();
const socketio = require("socket.io");

app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(9000);

// instance socket io server with default options to connect throught the path without CDN
const io = socketio(expressServer, {
    path: '/socket.io', // default option
    serveClient: true // default option
});

io.on("connection", (socket) => {
  socket.emit("messageFromServer", { data: "Welcome to the socket io server" });
  socket.on("messageToServer", (dataFromClient) => {
    console.log(dataFromClient);
  });
});
