const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoute = require("./routes/userRoute");
const authicationRoute = require("./routes/authicationRoute");
const productRoute = require("./routes/productRoute");
const cartRoute = require("./routes/cartRoute");
const orderRoute = require("./routes/orderRoute");
const cors = require("cors");
dotenv.config();

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRoute);
app.use("/api/auth", authicationRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

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
