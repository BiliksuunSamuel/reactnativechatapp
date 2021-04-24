const mongoose = require("mongoose");
///

const userSchema = new mongoose.Schema({
  username: String,
  phone: String,
  password: String,
  profile: String,
  status: String,
  isAdmin: String,
});

const messageSchema = new mongoose.Schema({
  id: String,
  msgType: String,
  message: String,
  time: String,
  sender: Object,
  key: String,
});

module.exports = { userSchema, messageSchema };
