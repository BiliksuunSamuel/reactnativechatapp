const mongoose = require("mongoose");

///
const connection = mongoose.connect(
  `mongodb://${process.env.host}:${process.env.hostport}/${process.env.database}`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
connection
  .then(function () {
    console.log("database connected");
  })
  .catch((error) => {
    if (error) {
      console.log(error.message);
      return;
    }
  });

module.exports = connection;
