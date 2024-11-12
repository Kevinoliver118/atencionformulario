const express = require('express');
const router = express.Router();
const equipoController = require('../controllers/equipoController');

router.get('/', equipoController.getAllEquipos);
router.post('/', equipoController.createEquipo);
// Agrega más rutas según sea necesario (GET por ID, PUT, DELETE)

module.exports = router;