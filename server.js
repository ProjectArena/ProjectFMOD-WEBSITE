// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  // Listen for requests and send back player count
  socket.on('getPlayerCount', (serverIP) => {
    // Simulate fetching player count based on the serverIP
    const playerCount = 68; // Replace with actual logic to get player count
    socket.emit('playerCount', playerCount);
  });
});

server.listen(27017, () => {
  console.log('Server is running on port 27017');
});
