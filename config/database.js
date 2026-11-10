const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',        
    host: 'localhost',
    database: 'laundrai_db',
    password: 'nutrisari', 
    port: 5432,
});

pool.connect((err) => {
    if (err) {
        console.error('Koneksi database gagal:', err.stack);
    } else {
        console.log('Berhasil terhubung ke database PostgreSQL LaundrAI');
    }
});

module.exports = pool;