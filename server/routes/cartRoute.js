const express = require("express");
const router = express.Router();
const {
  getAllProductsInCart,
  insertProductToCart,
  deleteProductFromCart,
} = require("../controllers/cartController");

router.get("/", (req, res) => {
  getAllProductsInCart()
    .then((productInCart) => {
      res.json(productInCart);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/", (req, res) => {
  const productToCart = req.body.productToCart;
  // const price = req.body
  insertProductToCart(productToCart)
    .then((theProductChosen) => res.json(theProductChosen))
    .catch((err) => res.json(err));
});

router.delete("/:id", (req, res) => {
  const _id = req.params.id;
  deleteProductFromCart(_id)
    .then((productRemoved) => {
      console.log(productRemoved);
      //   logger(productRemoved);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
