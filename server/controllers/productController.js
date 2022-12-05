const Category = require("../models/Category");
const Product = require("../models/Product");
const SliderItem = require("../models/SliderItem");

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

const getAllProductData = async () => {
  return await new Promise(async (resolve, reject) => {
    try {
      const categories = await Category.find().exec()
      const products = await Product.find().exec()
      const sliderItems = await SliderItem.find().exec()
      return resolve({
        categories,
        products,
        sliderItems
      })
    } catch (e) {
      reject(e)
    }
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
  getAllProductData,
  updateProduct,
  deleteProduct,
};
