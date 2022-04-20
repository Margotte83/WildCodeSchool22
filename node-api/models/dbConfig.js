const mongoose = require("mongoose");

//DB connection
mongoose.connect(
  "mongodb+srv://<...>@cluster0.h7let.mongodb.net/node-api?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("MongoDB connection succeeded.");
    } else {
      console.log("Error in DB connection: " + err);
    }
  }
);

module.exports = mongoose;
