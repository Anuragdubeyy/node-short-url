const express = require("express");
const { handleUserSingUp, handleUserLogin } = require("../controllers/user");
const router = express.Router();

router.post("/", handleUserSingUp);
router.post("/login", handleUserLogin);

module.exports = router;
