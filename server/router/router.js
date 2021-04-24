const router = require("express").Router();
const controller = require("../controller/controller");

///
///
///

router.get("/", function (req, res) {
  res.send("server up and running");
});

router.post("/api/login", controller.initLogin);
router.post("/api/register", controller.initRegister);
router.post("/api/chats", controller.getMessages);
////
module.exports = router;
