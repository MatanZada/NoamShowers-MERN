const express = require("express");
const router = express.Router();

const {
  addProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

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

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PRODUCT
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
