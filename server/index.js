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

const sliderItems = [
  {
    color: 'red', inStock: true, categories: [],
    img: "https://www.el-gal.co.il/wp-content/uploads/2018/06/Vitra_0256_copy-1.jpg",
    title: "POPULAR SALE",
    desc: "Do not compromise on quality! Get a 10% discount on the shower,bathroom cabinet and shower accessories",
    bg: "EEEEEE",
  },
  {
    color: 'red', inStock: true, categories: [],
    img: "https://www.el-gal.co.il/wp-content/uploads/2018/06/304_Versus_-_Bathroom_-_White-copy.jpg",
    title: "POPULAR SALE",
    desc: "Do not compromise on quality! Get a 10% discount on the shower,bathroom cabinet and shower accessories",
    bg: "EEEEEE",
  },
  {
    color: 'red', inStock: true, categories: [],
    img: "https://www.el-gal.co.il/wp-content/uploads/2018/06/Memoria_Elements_-_Set_02_-_01_Main_Set_Revised-1.jpg",
    title: "POPULAR SALE",
    desc: "Do not compromise on quality! Get a 10% discount on the shower,bathroom cabinet and shower accessories",
    bg: "EEEEEE",
  },
  {
    color: 'red', inStock: true, categories: [],
    img: "https://www.el-gal.co.il/wp-content/uploads/2018/06/439_Bern_-_Bathroom_Set_01_-_02_Ambiente.jpg",
    title: "POPULAR SALE",
    desc: "Do not compromise on quality! Get a 10% discount on the shower,bathroom cabinet and shower accessories",
    bg: "EEEEEE",
  },
];
const categories = [
  {
    img: "https://www.el-gal.co.il/wp-content/uploads/2018/06/eternity_x2-copy.jpg",
    title: "BATHROOM",
  },
  {
    img: "https://www.el-gal.co.il/wp-content/uploads/2019/07/A42557.jpg",
    title: "SINK FAUCET",
  },
  {
    img: "https://www.el-gal.co.il/wp-content/uploads/2018/07/VitrA6286srevize.jpg",
    title: "BATHROOM SINK",
  },
];

const CartProducts = [
  {
    color: 'red', inStock: true, categories: [],
    title: "Royal shower",
    img: "https://www.el-gal.co.il/wp-content/uploads/2019/06/62570_sol.jpg",
    size: "200*120",
    price: 10.0
  },
  {
    color: 'red', inStock: true, categories: [],
    title: "Royal shower2",
    img: "https://www.el-gal.co.il/wp-content/uploads/2019/06/62582_1-1.jpg",
    size: "180*140",
    price: 12.0
  },
  {
    color: 'red', inStock: true, categories: [],
    title: "Royal shower3",
    img: "https://www.el-gal.co.il/wp-content/uploads/2019/06/64101.jpg",
    size: "110*80",
    price: 13.0
  },
  {
    color: 'red', inStock: true, categories: [],
    title: "Royal shower4",
    img: "https://www.el-gal.co.il/wp-content/uploads/2019/06/64079.jpg",
    size: "310*220",
    price: 14.0
  },
  {
    color: 'red', inStock: true, categories: [],
    title: "Royal shower5",
    img: "https://www.el-gal.co.il/wp-content/uploads/2019/07/64110.jpg",
    size: "145*92",
    price: 15.0
  },
  {
    color: 'red', inStock: true, categories: [],
    title: "Royal shower",
    img: "https://www.el-gal.co.il/wp-content/uploads/2019/06/64041.jpg",
    size: "100*50",
    price: 16.0
  },
];


mongoose
  .connect("mongodb://127.0.0.1:27017/final_project")
  .then(() => {
    app.listen(port, () => {
      logger.info(
        `start server start listening on port http://localhost:${port}`
      );

      // create items in database

      // sliderItems.map(item => new SliderItem(item)).forEach(async m => await m.save())
      // categories.map(category => new Category(category)).forEach(async m => await m.save()) 
      // CartProducts.map(product => new Product(product)).forEach(async m => await m.save()) 
      // logger.info(
      //   `Saved successfully`
      // );

    });
  })
  .catch((err) => console.error(err));
