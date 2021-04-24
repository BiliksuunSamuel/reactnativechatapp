require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const port = process.env.PORT || process.env.port;
const cors = require("cors");
const bodyparser = require("body-parser");
const cookieparser = require("cookie-parser");
const router = require("./router/router");
const socketio = require("socket.io");
const io = socketio(server);
require("./connection");
const services = require("./services");
const socketCommunication = require("./functions");
////
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cookieparser());
app.use(router);

///
server.listen(port, function () {
  console.log(`server running on http://localhost:${port}`);
});

////..SOCKET COMMUNICATIONS
socketCommunication(io);
