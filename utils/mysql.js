import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const connectionConfig = process.env.JAWSDB_URL 
    ? process.env.JAWSDB_URL 
    : {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    };

const pool = mysql.createPool(connectionConfig);

const db = pool.promise();

export default db;