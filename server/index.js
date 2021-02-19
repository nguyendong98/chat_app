const express = require('express');
const socket = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;


const app = express();
const server = http.createServer(app);
const io = socket(server);

app.use('/', require('./router'));

server.listen(PORT);
