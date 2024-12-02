const express = require("express");
const { loginController, registerController } = require("../controllers/userController");

// Router object
const router = express.Router();

// POST || LOGIN USER
router.post("/login", loginController);

// POST || REGISTER USER
router.post("/register", (req, res, next) => {
  console.log("Register route hit", req.body);
  next();
}, registerController);

module.exports = router;
