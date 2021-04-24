const mongoose = require("mongoose");
const schema = require("../schema");

////
const userModel = mongoose.model("users", schema.userSchema);
const chatModel = mongoose.model("chats", schema.messageSchema);

////
module.exports = { userModel, chatModel };
