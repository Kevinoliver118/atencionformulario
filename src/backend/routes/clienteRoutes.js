// src/backend/routes/clienteRoutes.js
import express from 'express';
import { createCliente, getCliente, getClientes } from '../controllers/clienteController.js';

const router = express.Router();

// Ruta para obtener todos los clientes
router.get('/clientes', getClientes);

// Ruta para crear un nuevo cliente
router.post('/clientes', createCliente);

// Ruta para obtener un cliente por ID
router.get('/clientes/:id', getCliente);

export default router;
