const router = require("express").Router();
const places = require("../models/place.js");

// GET /places
router.get("/", (req, res) => {
  res.render("places/index", { places });
});

router.get("/new", (req, res) => {
  res.render("places/new");
});

router.get("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.render("places/show", { place: places[id], id });
  }
});

router.delete("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    places.splice(id, 1);
    res.redirect("/places");
  }
});

router.post("/", (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = "https://pbs.twimg.com/media/E_3k99GVUAQt8PH.jpg";
  }
  if (!req.body.city) {
    req.body.city = "Tokyo";
  }
  if (!req.body.state) {
    req.body.state = "Japan";
  }
  places.push(req.body);
  res.redirect("/places");
});

module.exports = router;
