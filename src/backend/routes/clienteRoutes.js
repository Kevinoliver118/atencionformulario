// backend/routes/clienteRoutes.js
const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Obtener todos los clientes
router.get('/clientes', clienteController.obtenerClientes);

// Resto de rutas...

module.exports = router;
