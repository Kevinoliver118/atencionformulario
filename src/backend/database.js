import mysql from 'mysql2/promise';

// Crear el pool de conexiones a la base de datos
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cuscoinformatico',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export default pool; // Exportamos el pool de conexiones