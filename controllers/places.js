const router = require("express").Router();

// GET /places
router.get("/", (req, res) => {
  let places = [
    {
      name: "Kirby Cafe",
      city: "Tokyo",
      state: "Japan",
      cuisines: "Kirby Themed Cuisine",
      pic: "/images/kirby.webp",
    },
    {
      name: "Sheng Ramen",
      city: "Charlotte",
      state: "NC",
      cuisines: "Ramen",
      pic: "/images/ramen.jpg",
    },
  ];
  res.render("places/index", { places });
});

module.exports = router;
