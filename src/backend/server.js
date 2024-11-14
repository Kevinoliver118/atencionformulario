// src/backend/server.js
import cors from 'cors';
import express from 'express';
import clienteRoutes from './routes/clienteRoutes.js'; // Rutas de cliente

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Usamos las rutas de clientes
app.use(clienteRoutes);

// Ruta raíz de prueba
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API de AtencionFormulario!');
});

// Manejo de errores 404
app.use((req, res) => {
  res.status(404).send('Ruta no encontrada');
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
