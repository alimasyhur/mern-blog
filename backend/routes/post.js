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

router.get("/posts/trendings", (req, res) => {
  Post.find()
    .sort({ numOfLikes: -1 })
    .populate("category", "_id name")
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => {
      console.error(err);
    });
});

router.get("/posts/fresh-stories", (req, res) => {
  Post.find()
    .sort({ _id: -1 })
    .limit(3)
    .populate("category", "_id name")
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => {
      console.error(err);
    });
});

router.get("/posts/featured", (req, res) => {
  Post.find({ isFeatured: true })
    .populate("category", "_id name")
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => {
      console.error(err);
    });
});

router.post("/posts", (req, res) => {
  const { title, description, numOfLikes, imgUrl, category, isFeatured } = req.body;
  if ( !title || !description || !imgUrl || !category ) {
      res.json({err: 'All fields are required'});
  }

  Category.findOne({ _id: category.id })
    .then((cat) => {
        const post = new Post({
          title,
          description,
          numOfLikes,
          isFeatured,
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

router.post("/posts/search/:str", (req, res) => {
  const { str } = req.params;

  if (!str) {
    res.json({ err: 'Nothing is searched' });
  }

  Post.find({ $text: { $search: str } })
  .then((post) => {
    res.json({ msg: 'Found', post });
  })
  .catch((err) => {
    res.json({ error: err });
  });
});

module.exports = router;