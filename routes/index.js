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

router.get("/:folder/:name", function (req, res, next) {
  const { name, folder } = req.params;
  const isValid = fs.existsSync(p + `/${folder}/${name}.ejs`);
  if (!isValid) {
    return next(createError(404));
  }

  res.render(`${folder}/${name}`, {
    title: `${name.charAt(0).toUpperCase() + name.slice(1)} ${
      folder.charAt(0).toUpperCase() + folder.slice(1, folder.length - 1)
    }`,
  });
});

module.exports = router;
