// src/backend/config/db.js

import mysql from 'mysql'; // Importamos el paquete mysql

// Configuración de la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',   // Dirección del servidor de la base de datos
  user: 'root',        // Usuario de la base de datos
  password: '',        // Contraseña del usuario de MySQL (ajustar según tu configuración)
  database: 'cuscoinformatico'  // Nombre de la base de datos
});

// Establecer la conexión a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err.stack);
    return;
  }
  console.log('Conexión a la base de datos establecida');
});

// Exportar la conexión para usarla en otros archivos
export default db;
