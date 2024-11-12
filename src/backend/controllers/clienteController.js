// src/backend/controllers/clienteController.js

import db from '../config/db.js'; // Conexión a la base de datos

// Lógica para agregar un cliente
export const agregarCliente = (req, res) => {
  const { nombre_cliente, ruc_dni, direccion } = req.body;

  // Verificar que todos los campos sean enviados
  if (!nombre_cliente || !ruc_dni || !direccion) {
    return res.status(400).json({ message: 'Todos los campos son requeridos' });
  }

  // Consulta SQL para insertar el cliente
  const query = 'INSERT INTO clientes (nombre, ruc_dni, direccion) VALUES (?, ?, ?)';

  // Ejecutar la consulta en la base de datos
  db.query(query, [nombre_cliente, ruc_dni, direccion], (err, result) => {
    if (err) {
      console.error('Error al guardar el cliente:', err);
      return res.status(500).json({ message: 'Hubo un error al guardar el cliente' });
    }
    // Responder con éxito
    res.status(200).json({ message: 'Cliente registrado con éxito' });
  });
};
