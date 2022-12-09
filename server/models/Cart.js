const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        product: {
          ref: "Product",
          type: mongoose.Schema.Types.ObjectId,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);
CartSchema.methods.testFunc = function testFunc(params) {};

module.exports = mongoose.model("Cart", CartSchema);
