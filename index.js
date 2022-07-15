// Require needed modules & initialize the app object
require("dotenv").config();
const express = require("express");
const app = express();

// Import router
app.use("/places", require("./controllers/places"));

// Create a homepage routine
app.get("/", function (req, res) {
  res.send("Hello World!");
});

// 404 page route
app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Page</h1>");
});

// Listen for connections
app.listen(process.env.PORT, function () {
  console.log("I am awake!");
});
