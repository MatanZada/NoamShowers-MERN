const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const { isEmail } = require("validator");
const jwt = require("jsonwebtoken");
const config = require("../config.json");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },

    lastName: { type: String, required: true },

    email: {
      type: String,
      required: [true, "Please enter your email address"],
      unique: true,
      lowercase: true,
      validate: [isEmail, "Please enter a valid email address"],
    },

    password: {
      type: String,
      required: true,
      minlength: [6, "minimum password length is 6 characters"],
    },

    isAdmin: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(this.password, salt);
    this.password = hashPass;
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.generateAuthToken = async function () {
  //try using Camel notation here(User(U with uppercase))
  const User = this;
  const token = jwt.sign({ _id: User._id.toString() }, "thisisnewcourse");
  return token;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
