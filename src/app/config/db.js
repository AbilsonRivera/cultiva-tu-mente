import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '', // Por defecto XAMPP no tiene contraseña
    database: 'cultiva_tu_mente',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;
