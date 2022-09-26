const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  path = require("path"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://0.0.0.0:27017/noamShowerProject")
  .then(() => {
    app.listen(port, () => {
      console.info(
        `start server start listening on port http://localhost:${port}`
      );
    });
  })
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  return res.json({ hello: "world" });
});
