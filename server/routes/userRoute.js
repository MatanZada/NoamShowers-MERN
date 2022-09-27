const express = require("express");
const router = express.Router();

const {
  addUser,
  getAllUsers,
  getOneUser,
} = require("../controllers/userController");

router.post("/", (req, res) => {
  let { firstName, lastName, email, password, isAdmin } = req.body;

  addUser(firstName, lastName, email, password, isAdmin)
    .then((userDate) => res.json(userDate))
    .catch((error) => res.json(error));
  console.log(req.body);
});

router.get("/:id", (req, res) => {
  getOneUser(req.params.id)
    .then((userDate) => {
      res.json(userDate);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/", (req, res) => {
  getAllUsers()
    .then((userDate) => {
      res.json(userDate);
    })
    .catch((error) => res.json(error));
});

module.exports = router;
