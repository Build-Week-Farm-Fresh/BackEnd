const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Users = require("../models/users-model.js");
const { generateToken } = require("../middleware/token.js");

router.post("/register", (req, res, next) => {
  const newUser = req.body;
  if (newUser.username && newUser.password) {
    const hash = bcrypt.hashSync(newUser.password, 14);
    newUser.password = hash;
    Users.insert(req.body)
      .then(user => {
        res
          .status(200)
          .json({ message: "User registration successful.", id: user.id });
      })
      .catch(err => {
        next(err);
      });
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
});

router.post("/login", (req, res, next) => {
  const credentials = req.body;
  if (credentials.username && credentials.password) {
    Users.getByUsername(credentials.username)
      .then(user => {
        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          const token = generateToken(user);
          res.status(200).json({ username: user.username, id: user.id, token });
        } else {
          res.status(401).json({ message: "Invalid credentials" });
        }
      })
      .catch(err => {
        next(err);
      });
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
});

module.exports = router;
