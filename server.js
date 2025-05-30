
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.use(cors());
app.get('/', (req, res) => {
  res.send('VidWink backend is running.');
});

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);
});

server.listen(5000, () => {
  console.log('Server listening on http://localhost:5000');
});
