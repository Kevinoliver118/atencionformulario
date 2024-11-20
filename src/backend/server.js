import cors from 'cors';
import express from 'express';
import { crearCliente, obtenerClientes } from './controllers/clienteController.js';
import { guardarEquipo, obtenerEquipos } from './controllers/equipoController.js'; // Importar el nuevo controlador de equipos

const app = express();
const port = 5000;

// Middleware para manejar CORS y solicitudes JSON
app.use(cors());
app.use(express.json());

// Rutas para la API de clientes
app.post('/api/clientes', crearCliente); // Ruta para crear un cliente
app.get('/api/clientes', obtenerClientes); // Ruta para obtener todos los clientes

// Rutas para la API de equipos
app.post('/api/equipos', guardarEquipo); // Ruta para crear un equipo
app.get('/api/equipos', obtenerEquipos); // Ruta para obtener todos los equipos

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
