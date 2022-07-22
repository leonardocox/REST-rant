// Require needed modules & initialize the app object
require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
const app = express();

// Home page router
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

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
