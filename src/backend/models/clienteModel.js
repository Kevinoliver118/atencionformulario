// src/backend/models/clienteModel.js
import db from '../database.js'; // Conexión a la base de datos

// Modelo para obtener todos los clientes
export const getAllClientes = (callback) => {
  const query = 'SELECT * FROM clientes';
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Modelo para agregar un nuevo cliente
export const addCliente = (name, number, service, callback) => {
  const query = 'INSERT INTO clientes (name, number, service) VALUES (?, ?, ?)';
  db.query(query, [name, number, service], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.insertId);
  });
};

// Modelo para obtener un cliente por ID
export const getClienteById = (id, callback) => {
  const query = 'SELECT * FROM clientes WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) return callback(err, null);
    callback(null, result[0]);
  });
};
