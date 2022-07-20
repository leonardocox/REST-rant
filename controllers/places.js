const router = require("express").Router();
const places = require("../models/place.js");

// GET /places
router.get("/", (req, res) => {
  res.render("places/index", { places });
});

router.get("/new", (req, res) => {
  res.render("places/new");
});

module.exports = router;
