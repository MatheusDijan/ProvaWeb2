const express = require("express");
const router = express.Router();
const CarroController = require("../controllers/CarroController.js");

router.get("/listar", CarroController.get);
router.post("/cadastrar", CarroController.insert);

module.exports = router;