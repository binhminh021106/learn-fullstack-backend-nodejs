const express = require("express");
const router = express.Router();
const { getHomePage } = require("../controllers/homeController");

router.get("/", getHomePage);

router.get("/shop", (req, res) => {
  // res.send("Hi con cặc!");
  res.render("sample.ejs");
});

module.exports = router;
