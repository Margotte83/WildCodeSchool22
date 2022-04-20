const mongoose = require("mongoose");
const PostsModel = mongoose.model(
  //DB name
  "node-api",
  //object
  {
    author: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  //table
  "posts"
);
module.exports = { PostsModel };
