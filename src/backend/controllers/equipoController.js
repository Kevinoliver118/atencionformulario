// controllers/equipoController.js
import db from '../database.js'; // Conexión a la base de datos

// Función para guardar un equipo
export const guardarEquipo = async(req, res) => {
    const {
        clienteId,
        tipo,
        marca,
        modelo,
        numeroSerie,
        motivoIngreso,
        accesorios,
        observaciones,
        precio
    } = req.body;

    // Validar que todos los campos necesarios estén presentes
    if (!clienteId || !tipo || !marca || !modelo || !numeroSerie || !motivoIngreso || !precio) {
        return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }

    try {
        // Verificar que el clienteId exista en la tabla de clientes
        const [cliente] = await db.query('SELECT * FROM clientes WHERE id = ?', [clienteId]);

        if (!cliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }

        // Convertir el array de accesorios en un texto delimitado
        const accesoriosText = accesorios ? accesorios.join(', ') : '';

        // Insertar el equipo en la base de datos
        const query = `INSERT INTO equipos (cliente_id, tipo, marca, modelo, numero_serie, motivo_ingreso, accesorios, observaciones, precio) 
                       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const values = [
            clienteId,
            tipo,
            marca,
            modelo,
            numeroSerie,
            motivoIngreso,
            accesoriosText,
            observaciones,
            precio
        ];

        const result = await db.query(query, values);

        // Si el registro fue exitoso, devolver una respuesta
        res.status(201).json({
            message: 'Equipo registrado exitosamente',
            id: result.insertId,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al registrar el equipo' });
    }
};

// Función para obtener todos los equipos
export const obtenerEquipos = async(req, res) => {
    try {
        const [equipos] = await db.query('SELECT * FROM equipos');
        res.status(200).json(equipos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los equipos' });
    }
};