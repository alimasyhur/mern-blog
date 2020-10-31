const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Category = mongoose.model("Category");
const Post = mongoose.model("Post");

router.get("/posts", (req, res) => {
    Post.find()
    .populate('category', '_id name')
    .then(posts => {
        res.json({ posts });
    })
    .catch(err => {
        console.error(err);
    })
});

router.post("/posts", (req, res) => {
  const { title, description, imgUrl, category } = req.body;
  if ( !title, !description, !imgUrl, !category ) {
      res.json({err: 'All fields are required'});
  }

  Category.findOne({ _id: category.id })
    .then((cat) => {
        const post = new Post({
            title,
            description,
            imgUrl,
            category: cat.id,
        });

        post.save()
            .then(() => {
                res.json({ msg: "Post created" });
            })
            .catch((err) => {
                console.error(err);
            });
    })

});

module.exports = router;