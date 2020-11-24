const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Post = mongoose.model("Post");
const Comment = mongoose.model("Comment");

router.get("/comments", (req, res) => {
    Comment.find()
    .populate('post', '_id title')
    .then(comments => {
        res.json({ comments });
    })
    .catch(err => {
        console.error(err);
    })
});

router.get("/comments/posts/:postId", (req, res) => {
  Comment.find({ post: req.params.postId })
    .populate("post", "_id title")
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => {
      console.error(err);
    });
});

router.post("/comments", (req, res) => {
  const { body, post } = req.body;
  if (!body || !post) {
    res.json({ err: "All fields are required" });
  }
  
  Post.findOne({ _id: post }).then((post) => {
    const comment = new Comment({
      body,
      post,
    });

    comment
      .save()
      .then(() => {
        res.json({ msg: "Comment created" });
      })
      .catch((err) => {
        console.error(err);
      });
  });
});

module.exports = router;