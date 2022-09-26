const User = require("../models/User");

const addUser = (firstName, lastName, email, password, isAdmin) => {
  return new Promise((resolve, reject) => {
    const user = new User({
      firstName,
      lastName,
      email,
      password,
      isAdmin,
    });
    user.save((err, userData) => {
      userData ? resolve(userData) : reject(err);
    });
  });
};

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    User.find().then((userData) => {
      userData ? resolve(userData) : reject(err);
    });
  });
};

module.exports = {
  addUser,
  getAllUsers,
};
