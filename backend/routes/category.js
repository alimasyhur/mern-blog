const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Category = mongoose.model("Category");

router.get("/categories", (req, res) => {
    Category.find()
      .then((categories) => {
        res.json({ categories });
      })
      .catch((err) => {
        console.error(err);
      });
});

router.get("/categories/count", (req, res) => {
    Category.count()
      .then((count) => {
        res.json({ categories: { count } });
      })
      .catch((err) => {
        console.error(err);
      });
});

router.post("/categories", (req, res) => {
  const { name } = req.body;
  if ((!name)) {
    res.json({ err: "All fields are required" });
  }

  const category = new Category({
    name,
  });

  category
    .save()
    .then(() => {
      res.json({ msg: "Category created" });
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;