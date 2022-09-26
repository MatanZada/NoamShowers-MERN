const express = require("express");
const router = express.Router();

const {
  addProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.post("/", (req, res) => {
  const { title, desc, img, categories, size, color, price, inStock } =
    req.body;
  addProduct(title, desc, img, categories, size, color, price, inStock)
    .then((productDate) => res.json(productDate))
    .catch((error) => res.json(error));
});

router.get("/:id", (req, res) => {
  getProduct(req.params.id)
    .then((productDate) => {
      res.json(productDate);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/", (req, res) => {
  getAllProducts()
    .then((productDate) => {
      res.json(productDate);
    })
    .catch((error) => res.json(error));
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const desc = req.body.desc;
  const img = req.body.img;
  const categories = req.body.categories;
  const size = req.body.size;
  const color = req.body.color;
  const price = req.body.price;
  const inStock = req.body.inStock;
  updateProduct(id, title, desc, img, categories, size, color, price, inStock)
    .then((productDate) => {
      console.log(productDate);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete("/:delById", (req, res) => {
  const _id = req.params.delById;
  deleteProduct(_id)
    .then((productDate) => {
      console.log(productDate);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
