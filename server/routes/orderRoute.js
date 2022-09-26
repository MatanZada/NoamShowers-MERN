const express = require("express");
const router = express.Router();
const {
  insertOrder,
  findAllOrders,
  findOrderById,
  updateOrderById,
} = require("../controllers/orderController");

router.post("/", (req, res) => {
  let { orderId, userId, products, amount, address, status } = req.body;
  insertOrder(orderId, userId, products, amount, address, status)
    .then((orderData) => res.json(orderData))
    .catch((err) => console.log(err));
});

router.get("/", (req, res) => {
  findAllOrders()
    .then((orderData) => res.json(orderData))
    .catch((err) => console.log(err));
});

router.get("/:id", (req, res) => {
  findOrderById(req.params.id)
    .then((orderData) => res.json(orderData))
    .catch((err) => console.log(err));
});

router.put("/:id", (req, res) => {
  let { orderId, userId, products, amount, address, status } = req.body;
  updateOrderById(
    req.params.id,
    orderId,
    userId,
    products,
    amount,
    address,
    status
  )
    .then((orderData) => res.json(orderData))
    .catch((err) => console.log(err));
});

module.exports = router;
