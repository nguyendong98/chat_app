const express = require("express");
const app = express();
app.use(express.static("public"));

const server = require("http").Server(app);
const io = require("socket.io")(server);
server.listen(5000);
