const models = require("../models");

///
function getuserbyPhone(phone) {
  return new Promise(function (resolve, reject) {
    try {
      models.userModel.find({ phone: phone }, function (error, results) {
        if (error) reject(error);
        resolve(results[0]);
      });
    } catch (error) {
      reject(error);
    }
  });
}

function getuserbyID(id) {
  return new Promise(function (resolve, reject) {
    try {
      models.userModel
        .findById(isValidObjectId(id))
        .then((results) => {
          resolve(results);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
}

///
function saveUserDetails(user) {
  return new Promise(function (resolve, reject) {
    try {
      const User = new models.userModel(user);
      User.save();
      resolve(User);
    } catch (error) {
      reject(error);
    }
  });
}

function getMessages() {
  return new Promise(function (resolve, reject) {
    try {
      models.chatModel.find(function (error, results) {
        if (error) reject(error);
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
}

function saveMessage(message) {
  return new Promise(function (resolve, reject) {
    try {
      const Chat = new models.chatModel(message);
      Chat.save();
      resolve(Chat);
    } catch (error) {
      reject(error);
    }
  });
}
////
module.exports = {
  getuserbyPhone,
  getuserbyID,
  getMessages,
  saveMessage,
  saveUserDetails,
};
