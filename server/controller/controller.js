const services = require("../services");
const utils = require("../utils/utils");

/////
async function initLogin(req, res) {
  try {
    const user = utils.formatLoginDetails(req.body);
    const results = await services.getuserbyPhone(user.phone);

    if (results) {
      const match = await utils.verifyPassword(user.password, results.password);
      if (match) {
        const info = utils.formatAccountDetails(results);
        res.send(info);
      } else {
        res.status(404).send("invalid login password");
      }
    } else {
      res.status(404).send("invalid login phone");
    }
  } catch (error) {
    res.status(404).send(error.message || "server error");
  }
}

async function initRegister(req, res) {
  try {
    console.log(req.body);
  } catch (error) {
    res.status(404).send(error.message || "server error");
  }
}

async function getMessages(req, res) {
  try {
    const chats = await services.getMessages();
    res.send(chats);
  } catch (error) {
    res.status(404).send(error.message || "server error");
  }
}

module.exports = { initLogin, initRegister, getMessages };
