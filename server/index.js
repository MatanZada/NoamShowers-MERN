const express = require("express"),
  app = express(),
  port = process.env.PORT || 8080,
  path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authicationRoute");
const productRoute = require("./routes/productRoute");
const cartRoute = require("./routes/cartRoute");
const orderRoute = require("./routes/orderRoute");
const logger = require("./logger/logger");
const stripeRoute = require("./routes/stripe");

const cors = require("cors");
const SliderItem = require("./models/SliderItem");
const Category = require("./models/Category");
const Product = require("./models/Product");

dotenv.config();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

mongoose
  .connect("mongodb://localhost:27017/final_project")
  .then(() => {
    app.listen(port, () => {
      logger.info(
        `start server start listening on port http://localhost:${port}`
      );
    });
  })
  .catch((err) => console.error(err));
