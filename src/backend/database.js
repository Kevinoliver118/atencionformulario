// Importa el módulo mysql2
import mysql from 'mysql2';

// Crea una conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',      // Cambia esto por el host de tu base de datos
  user: 'root',           // Tu nombre de usuario de MySQL
  password: '',           // Tu contraseña de MySQL
  database: 'cuscoinformatico',   // El nombre de tu base de datos
});

// Verifica si la conexión fue exitosa
connection.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err.stack);
    return;
  }
  console.log('Conexión a la base de datos exitosa');
});

// Exporta la conexión para usarla en otros archivos
export default connection;
