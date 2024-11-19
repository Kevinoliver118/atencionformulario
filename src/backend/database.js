import mysql from 'mysql2/promise';

// Crear la conexión a la base de datos
async function initializeDatabase() {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'cuscoinformatico'
        });
        console.log('Conexión a la base de datos exitosa :)');
        return connection; // Retorna la conexión para usarla en otros archivos
    } catch (error) {
        console.log('Error al conectar a la base de datos:', error);
        process.exit(1); // Termina el proceso si la conexión falla
    }
}

// Inicializa la base de datos de manera asíncrona y exporta la conexión
const db = initializeDatabase(); // Mantén la conexión abierta
export default db;
