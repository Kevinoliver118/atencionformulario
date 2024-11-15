import { db } from '../database.js';

// Controlador para registrar un cliente
const registrarCliente = (req, res) => {
    const { nombre, ruc_dni, direccion } = req.body;

    // Validar que los campos no estén vacíos
    if (!nombre || !ruc_dni || !direccion) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    // Inserción de datos en la base de datos
    const query = 'INSERT INTO clientes (nombre, ruc_dni, direccion) VALUES (?, ?, ?)';

    db.query(query, [nombre, ruc_dni, direccion], (err, result) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                // Si el error es de duplicado, enviar un mensaje adecuado
                return res.status(400).json({ message: 'El RUC o DNI ya está registrado en el sistema.' });
            }
            console.error('Error al registrar cliente:', err);
            return res.status(500).json({ message: 'Hubo un error al registrar el cliente' });
        }

        // Respuesta exitosa con el ID del cliente insertado
        res.status(201).json({
            message: 'Cliente registrado correctamente',
            clienteId: result.insertId,
        });
    });
};

export default { registrarCliente };