import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

let pool;

if (process.env.JAWSDB_URL) {
    pool = mysql.createPool(process.env.JAWSDB_URL);
} else {
    pool = mysql.createPool({
        host: process.env.DB_HOST || '127.0.0.1',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });
}

const db = pool.promise();

export default db;