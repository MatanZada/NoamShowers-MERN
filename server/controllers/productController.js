const Product = require("../models/Product");

const addProduct = (
  title,
  desc,
  img,
  categories,
  size,
  color,
  price,
  inStock
) => {
  return new Promise((resolve, reject) => {
    let product = new Product({
      title,
      desc,
      img,
      categories,
      size,
      color,
      price,
      inStock,
    });
    product.save((err, productData) => {
      productData ? resolve(productData) : reject(err);
    });
  });
};

const getProduct = (_id) => {
  return new Promise((resolve, reject) => {
    Product.findById(_id, (err, productData) => {
      productData ? resolve(productData) : reject(err);
    });
  });
};

const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    Product.find().then((productData) => {
      productData ? resolve(productData) : reject(err);
    });
  });
};

const updateProduct = (
  _id,
  title,
  desc,
  img,
  categories,
  size,
  color,
  price,
  inStock
) => {
  return new Promise((resolve, reject) => {
    Product.findByIdAndUpdate(_id, {
      $set: { title, desc, img, categories, size, color, price, inStock },
    })
      .then((productData) => {
        resolve(productData);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const deleteProduct = (_id) => {
  return new Promise((resolve, reject) => {
    Product.deleteOne(
      {},
      {
        _id,
      },
      (err, productData) => {
        err ? reject(err) : resolve(productData);
      }
    );
  });
};

module.exports = {
  addProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
