const express = require("express");
const router = express.Router();
const ObjectID = require("mongoose").Types.ObjectID;

const { PostsModel } = require("../models/postsModel");

router.get("/", (req, res) => {
  PostsModel.find((err, docs) => {
    //console.log(docs);
    if (!err) res.send(docs);
    else console.log("Error to get data:" + err);
  });
});

//method post to create new post
router.post("/", (req, res) => {
  console.log(req);
  //object to save
  const newRecord = new PostsModel({
    author: req.body.author,
    message: req.body.message,
  });
  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error creating data:" + err);
  });
});

//method put to update post
router.put("/:id", (req, res) => {

  const updateRecord = {
    author: req.body.author,
    message: req.body.message
  };

  PostsModel.findByIdAndUpdate(
    req.params.id,
    { $set: updateRecord },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Error updating data:" + err);
    }
  );
});

//method delete to delete post
router.delete("/:id", (req, res) => {
  
  PostsModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error deleting data:" + err);
  });
});

module.exports = router;
