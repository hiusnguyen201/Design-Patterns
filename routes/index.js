var express = require("express");
var router = express.Router();
const fs = require("fs");
const createError = require("http-errors");
const path = require("path");
const p = path.join(__dirname, "../views");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Design Patterns" });
});

router.get("/patterns/:name", function (req, res, next) {
  const { name } = req.params;
  const isValid = fs.existsSync(p + `/patterns/${name}.ejs`);
  if (!isValid) {
    return next(createError(404));
  }

  res.render(`patterns/${name}`, {
    title: `${name.charAt(0).toUpperCase() + name.slice(1)} Pattern`,
  });
});

router.get("/algorithms/:name", function (req, res, next) {
  const { name } = req.params;
  const isValid = fs.existsSync(p + `/algorithms/${name}.ejs`);
  if (!isValid) {
    return next(createError(404));
  }

  res.render(`algorithms/${name}`, {
    title: `${name.charAt(0).toUpperCase() + name.slice(1)} Algorithm`,
  });
});

module.exports = router;
