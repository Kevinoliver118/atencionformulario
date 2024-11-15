import express from 'express';
import bodyParser from 'body-parser';
import clienteController from './controllers/clienteController.js';
import cors from 'cors';
import { db } from './database.js';

// Configuración de Express
const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Habilitar CORS para permitir peticiones desde otros dominios
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta para registrar el cliente
app.post('/registrarCliente', clienteController.registrarCliente);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});