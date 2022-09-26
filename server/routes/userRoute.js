const express = require("express");
const router = express.Router();

const { addUser, getAllUsers } = require("../controllers/userController");

router.post("/", (req, res) => {
  let { firstName, lastName, email, password, isAdmin } = req.body;

  addUser(firstName, lastName, email, password, isAdmin)
    .then((userDate) => res.json(userDate))
    .catch((error) => res.json(error));
  console.log(req.body);
});

router.get("/", (req, res) => {
  getAllUsers()
    .then((userDate) => {
      res.json(userDate);
    })
    .catch((error) => res.json(error));
});

module.exports = router;
