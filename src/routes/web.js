const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World Bro!");
});

router.get("/shop", (req, res) => {
  // res.send("Hi con cặc!");
  res.render("sample.ejs");
});

module.exports = router;
