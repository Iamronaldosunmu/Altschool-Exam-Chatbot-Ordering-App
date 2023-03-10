const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

const PORT = process.env.PORT || 4000;

io.on("connection", (socket) => {
  console.log("There has been a connection");
});

server.listen(PORT, () =>
  console.log(`Server is now listening on port ${PORT}...`)
);
