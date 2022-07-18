// Require needed modules & initialize the app object
require("dotenv").config();
const express = require("express");
const app = express();

// Home page router
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// Import router
app.use("/places", require("./controllers/places"));

// Create a homepage routine
app.get("/", function (req, res) {
  res.render("home");
});

// 404 page route
app.get("*", (req, res) => {
  res.render("error404");
});

// Listen for connections
app.listen(process.env.PORT, function () {
  console.log("I am awake!");
});
