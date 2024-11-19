import db from '../database.js'; // Importamos la conexión a la base de datos

// Crear un nuevo cliente
export const crearCliente = async (req, res) => {
    const { nombre, email, telefono } = req.body;

    try {
        const connection = await db; // Esperamos que la conexión esté lista

        // Consulta para insertar un nuevo cliente
        const query = 'INSERT INTO clientes (nombre, email, telefono) VALUES (?, ?, ?)';
        const [result] = await connection.execute(query, [nombre, email, telefono]);

        // Respondemos con el ID del nuevo cliente insertado
        res.status(200).json({ message: 'Cliente creado con éxito', clienteId: result.insertId });
    } catch (err) {
        console.error('Error al insertar cliente:', err);
        res.status(500).json({ message: 'Error al guardar los datos del cliente' });
    }
};

// Obtener todos los clientes
export const obtenerClientes = async (req, res) => {
    try {
        const connection = await db; // Esperamos la conexión

        // Consulta para obtener todos los clientes
        const [rows] = await connection.execute('SELECT * FROM clientes');

        // Respondemos con la lista de clientes
        res.status(200).json(rows);
    } catch (err) {
        console.error('Error al obtener clientes:', err);
        res.status(500).json({ message: 'Error al obtener los datos de los clientes' });
    }
};
