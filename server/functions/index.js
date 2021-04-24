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

    /////
  });
}

module.exports = socketCommunication;
