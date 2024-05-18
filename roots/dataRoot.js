const express = require('express');
const router = express.Router();
const pasienController = require('../controllers/controllerPasien');
const authHandler = require("../handler/authHandler");

router.get("/pasien", authHandler, pasienController.findAll);
router.post("/pasien", authHandler, pasienController.create);
router.get("/pasien/:id", authHandler, pasienController.findById);
router.put("/pasien/:id", authHandler, pasienController.update);
router.delete("/pasien/:id", authHandler, pasienController.delete);

module.exports = router;
