const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const userRoute = require("./routes/userRoute");
const authicationRoute = require("./routes/authicationRoute");
const productRoute = require("./routes/productRoute");
const cartRoute = require("./routes/cartRoute");
const orderRoute = require("./routes/orderRoute");
const logger = require("./logger/logger");

const cors = require("cors");

dotenv.config();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authicationRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

mongoose
  .connect("mongodb://0.0.0.0:27017/noamShowerProject")
  .then(() => {
    app.listen(port, () => {
      logger.info(
        `start server start listening on port http://localhost:${port}`
      );
    });
  })
  .catch((err) => console.error(err));
