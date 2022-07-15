// Require needed modules & initialize the app object
require("dotenv").config();
const express = require("express");
const app = express();

// Create a homepage routine
app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Page</h1>");
});

// Listen for connections
app.listen(process.env.PORT, function () {
  console.log("I am awake!");
});
