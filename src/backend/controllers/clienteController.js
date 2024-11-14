// src/backend/controllers/clienteController.js

import { addCliente, getAllClientes, getClienteById } from '../models/clienteModel.js';

// Obtener todos los clientes
export const getClientes = (req, res) => {
  getAllClientes((err, clientes) => {
    if (err) {
      console.error('Error al obtener clientes:', err);
      return res.status(500).json({ error: 'Error al obtener los clientes' });
    }
    res.json(clientes);
  });
};

// Agregar un nuevo cliente
export const createCliente = (req, res) => {
  const { name, number, service } = req.body;
  
  if (!name || !number || !service) {
    return res.status(400).json({ error: 'Faltan datos en la solicitud' });
  }

  addCliente(name, number, service, (err, clientId) => {
    if (err) {
      console.error('Error al agregar cliente:', err);
      return res.status(500).json({ error: 'Error al agregar cliente' });
    }
    res.status(201).json({ message: 'Cliente agregado con éxito', clientId });
  });
};

// Obtener un cliente por ID
export const getCliente = (req, res) => {
  const { id } = req.params;
  
  getClienteById(id, (err, cliente) => {
    if (err) {
      console.error('Error al obtener cliente:', err);
      return res.status(500).json({ error: 'Error al obtener el cliente' });
    }
    if (!cliente) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }
    res.json(cliente);
  });
};
