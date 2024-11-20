import db from '../database.js';

// Crear un nuevo cliente
export const crearCliente = async (req, res) => {
  const { nombre, ruc_dni, direccion } = req.body;

  if (!nombre || !ruc_dni || !direccion) {
    return res.status(400).json({
      message: 'Todos los campos son obligatorios. Por favor, completa todos los campos.',
    });
  }

  try {
    const connection = await db.getConnection(); // Obtiene una conexión del pool
    const query = 'INSERT INTO clientes (nombre, ruc_dni, direccion) VALUES (?, ?, ?)';
    const [result] = await connection.execute(query, [nombre, ruc_dni, direccion]);

    connection.release(); // Libera la conexión al pool

    return res.status(201).json({
      message: 'Cliente creado con éxito',
      clienteId: result.insertId,
    });
  } catch (error) {
    console.error('Error al insertar cliente:', error);
    return res.status(500).json({
      message: 'Error al guardar los datos del cliente',
      errorDetails: error.message,
    });
  }
};

// Obtener todos los clientes
export const obtenerClientes = async (req, res) => {
  try {
    const connection = await db.getConnection(); // Obtiene una conexión del pool
    const query = 'SELECT * FROM clientes';
    const [rows] = await connection.execute(query);

    connection.release(); // Libera la conexión al pool

    return res.status(200).json(rows);
  } catch (error) {
    console.error('Error al obtener clientes:', error);
    return res.status(500).json({
      message: 'Error al obtener los datos de los clientes',
      errorDetails: error.message,
    });
  }
};
