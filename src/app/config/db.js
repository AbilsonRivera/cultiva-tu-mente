import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'u346586528_mente',
    password: 'alndO>]Jl;Z3', // Por defecto XAMPP no tiene contraseña
    database: 'u346586528_ciltiva',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;
