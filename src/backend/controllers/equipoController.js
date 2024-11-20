import { db } from '../config/db.js'; // Asumimos que tienes una configuración de DB en un archivo db.js

// Función para agregar un equipo
export const guardarEquipo = async (req, res) => {
    const { tipo, marca, modelo, numeroSerie, motivoIngreso, accesorios, descripcion, precio, clienteId } = req.body;

    if (!tipo || !marca || !modelo || !numeroSerie || !motivoIngreso || !descripcion || !precio || !clienteId) {
        return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    try {
        const query = 'INSERT INTO equipos (tipo, marca, modelo, numero_serie, motivo_ingreso, accesorios, descripcion, precio, cliente_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [tipo, marca, modelo, numeroSerie, motivoIngreso, JSON.stringify(accesorios), descripcion, precio, clienteId];
        
        const result = await db.query(query, values);

        res.status(201).json({ message: 'Equipo registrado correctamente', id: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al guardar el equipo' });
    }
};

// Función para obtener todos los equipos
export const obtenerEquipos = async (req, res) => {
    try {
        const [equipos] = await db.query('SELECT * FROM equipos');
        res.status(200).json(equipos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los equipos' });
    }
};
