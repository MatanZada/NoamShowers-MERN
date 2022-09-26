const Cart = require("../models/Cart");

const getAllProductsInCart = () => {
  return new Promise((resolve, reject) => {
    Cart.find()
      .then((productData) => resolve(productData))
      .catch((err) => reject(err));
  });
};

const insertProductToCart = (userId, products) => {
  return new Promise((resolve, reject) => {
    const cart = new Cart(req.body);
    cart
      .save()
      .then((productChosen) => {
        resolve(productChosen);
      })
      .catch((err) => reject(err));
  });
};

const deleteProductFromCart = (_id) => {
  return new Promise((resolve, reject) => {
    Cart.findByIdAndDelete(_id)
      .then((productRemoved) => {
        resolve(productRemoved);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = {
  getAllProductsInCart,
  insertProductToCart,
  deleteProductFromCart,
};
