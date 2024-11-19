import cors from 'cors';
import express from 'express';
import { crearCliente, obtenerClientes } from './controllers/clienteController.js';

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Necesario para parsear JSON del cuerpo de la solicitud

// Ruta POST para registrar un cliente
app.post('/registrarCliente', crearCliente);

// Ruta GET para obtener todos los clientes
app.get('/clientes', obtenerClientes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
