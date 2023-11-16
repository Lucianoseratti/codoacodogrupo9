const express = require('express');
const router = express.Router();
const { viewLogin, login, viewRegister, register, logout } = require("../controllers/authControllers.js");

router.get("/login", viewLogin);
router.post("/login", login);
router.get("/register", viewRegister);
router.post("/register", register);
router.get("/logout", logout);

module.exports = router;