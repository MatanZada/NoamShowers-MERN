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

const newCart = async (req) => {
  const newCart = new Cart(req.body);
  return await newCart.save()
}

//CREATE

router.post("/", verifyToken, async (req, res) => {
  try {
    const savedCart = await newCart(req)
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    let updatedCart = null;
    if (req.params.id)
      updatedCart = await Cart.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        }
      ).populate('products');
    if (!updatedCart)
      return res.status(200).json(await newCart(req));
    return res.status(200).json(req.body)
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
router.get("/find/:id", async (req, res) => {
  try {
    const cart = await (Cart.findOne({ userId: req.params.id }).populate({
      path: 'products',
      populate: {
        path: 'product',
        model: 'Product'
      }
    }).exec())
    console.log(cart)
    if (cart !== null) {
      return res.status(200).json(cart);
    }
    const newCart = new Cart({ userId: req.params.id, products: [] });
    const result = await newCart.save()
    return res.status(200).json(result);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});



module.exports = router;
