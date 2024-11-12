// src/backend/server.js

import bodyParser from 'body-parser';
import cors from 'cors'; // Importamos CORS para permitir solicitudes desde otros orígenes
import express from 'express';
import clienteRoutes from './routes/clienteRoutes.js'; // Importamos las rutas de clientes

const app = express();

// Middleware para permitir solicitudes CORS
app.use(cors());

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(bodyParser.json());

// Usamos las rutas de clientes bajo el prefijo '/api'
app.use('/api', clienteRoutes);

// Configuración del puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
