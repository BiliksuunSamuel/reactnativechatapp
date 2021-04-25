const { connection } = require("mongoose");
const functions = require("./functions");

////

function socketCommunication(io) {
  io.on("connect", function (socket) {
    console.log("socket connection");
    socket.broadcast.emit("connection");
    socket.on("getChats", async function () {
      const chats = await functions.getChats();
      socket.emit("getChats", chats);
    });

    ///
    socket.on("message", function (message) {
      socket.broadcast.emit("message", message);
      functions.saveMessage(message);
    });

    ///
    socket.on("typing", function (state) {
      socket.broadcast.emit("typing", state);
    });
    ///
    socket.on("connected", function (connecteduser) {
      socket.broadcast.emit("connected", connecteduser);
    });
    /////
  });
}

module.exports = socketCommunication;
