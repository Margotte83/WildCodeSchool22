const mongoose = require("mongoose");

//DB connection
module.exports = async function connect() {
  try {
    //const url = "mongodb://127.0.0.1:27017/wilderdb";
    const url =
      "mongodb+srv://" +
      process.env.DB_USER_PASS +
      "@cluster0.h7let.mongodb.net/wilderdb?retryWrites=true&w=majority";
      autoIndex: true, // autoIndex est 

    await mongoose.connect(url);
    console.log("Connected sucessfully to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
  }
};
