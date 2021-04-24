const services = require("../services");

///a
async function getChats() {
  const chats = await services.getMessages();
  return chats;
}

function saveMessage(message) {
  services.saveMessage(message);
}
////
module.exports = { getChats, saveMessage };
