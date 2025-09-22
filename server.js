// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

// A simple GET endpoint to test
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

// Simple socket.io test
io.on('connection', (socket) => {
  console.log('A player connected:', socket.id);
  socket.on('disconnect', () => {
    console.log('Player disconnected:', socket.id);
  });
});

server.listen(3000, () => {
  console.log('✅ Backend server running on http://localhost:3000');
});
