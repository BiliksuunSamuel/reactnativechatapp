const bcrypt = require("bcrypt");
const { relativeTimeRounding } = require("moment");

///
function hashPassword(password) {
  return new Promise(function (resolve, reject) {
    try {
      bcrypt.hash(password, 10, function (error, hash) {
        if (error) {
          reject(error);
        }
        resolve(hash);
      });
    } catch (error) {
      reject(error);
    }
  });
}

////
function verifyPassword(password, hpassword) {
  return new Promise(function (resolve, reject) {
    try {
      bcrypt.compare(password, hpassword, function (error, match) {
        if (error) {
          reject(error);
        }
        resolve(match);
      });
    } catch (error) {
      reject(error);
    }
  });
}

////
function formatLoginDetails(info) {
  return { phone: info.phone, password: info.password };
}

///
function formatRegisterDetails(info) {
  return {
    username: info.username,
    phone: info.phone,
    password: info.password,
    status: null,
    isAdmin: null,
  };
}
///fu
function formatAccountDetails(info) {
  return {
    id: info._id,
    username: info.username,
    phone: info.phone,
    status: info.status,
    isAdmin: info.isAdmin,
  };
}
///
module.exports = {
  verifyPassword,
  hashPassword,
  formatLoginDetails,
  formatRegisterDetails,
  formatAccountDetails,
};
