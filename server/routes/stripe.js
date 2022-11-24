const router = require("express").Router();
const KEY = process.env.STRIPE_KEY;
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
const bodyParser = require("body-parser");
const cors = require("cors");

router.post("/payment", cors(), async (req, res) => {
  if (req.body.uid) {
    return res.json({
      message: "Payment Success",
      address: "dummy address",
      success: false,
    });
  } else {
    return res.json({
      error: "Payment failed",
    });
  }
});

module.exports = router;
