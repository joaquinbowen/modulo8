const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
//const verificarToken = require("../services/authServices");


router.post("/registrar", authController.registrarUsuario);
router.post("/login", authController.loginUsuario);

module.exports = router