const router = require("express").Router();
const places = require("../models/place.js");

// GET /places
router.get("/", (req, res) => {
  res.render("places/index", { places });
});

router.get("/new", (req, res) => {
  res.render("places/new");
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("POST /places");
});

module.exports = router;
