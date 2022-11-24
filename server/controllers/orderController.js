const Cart = require("../models/Cart");
let Order = require("../models/Order");

let insertOrder = (cart, userId, address, total) => {
  return new Promise((resolve, reject) => {
    let order = new Order({
      userId,
      products: cart.products,
      amount: total,
      address,
    });

    Cart.deleteOne({ _id: cart._id });
    order.save((err, orderData) => {
      orderData ? resolve(orderData) : reject(err);
    });
  });
};

let findAllOrders = () => {
  return new Promise((resolve, reject) => {
    Order.find((err, orderData) => {
      orderData ? resolve(orderData) : reject(err);
    });
  });
};

let findOrderById = (orderId) => {
  return new Promise((resolve, reject) => {
    Order.find({
      _id: orderId,
    })
      .then((orderData) => resolve(orderData))
      .catch((err) => reject(err));
  });
};

let updateOrderById = (orderId, userId, products, amount, address, status) => {
  return new Promise((resolve, reject) => {
    Order.findOneAndUpdate(
      {
        _id: orderId,
      },
      {
        $set: {
          userId,
          products,
          amount,
          address,
          status,
        },
      },
      (err, orderData) => {
        orderData ? resolve(orderData) : reject(err);
      }
    );
  });
};

module.exports = {
  insertOrder,
  findAllOrders,
  findOrderById,
  updateOrderById,
};
