const express = require("express");
const router = express.Router();
const {
  getAllProductsInCart,
  insertProductToCart,
  deleteProductFromCart,
} = require("../controllers/cartController");
const Cart = require("../models/Cart");

const {
  verifyToken,
  verifyTokenAndAdmin,
} = require("./verifyToken");

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

//CREATE

router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER CART
router.get("/find", verifyToken, async (req, res) => {
  try {
    const cart = await cart.findOne({ userId: req.user._id });
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// //GET ALL

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await carts.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
