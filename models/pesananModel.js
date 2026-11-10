const pool = require('../config/database');
const getAll = async () => {
    const result = await pool.query('SELECT * FROM pesanan ORDER BY waktu_pesan DESC');
    return result.rows;
};

const getById = async (id) => {
    const result = await pool.query('SELECT * FROM pesanan WHERE id = $1', [id]);
    return result.rows[0];
};

const create = async (data) => {
    const { nama_pelanggan, paket_utama, item_tambahan, berat_kg, total_harga } = data;
    const result = await pool.query(
        'INSERT INTO pesanan (nama_pelanggan, paket_utama, item_tambahan, berat_kg, total_harga) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [nama_pelanggan, paket_utama, item_tambahan, berat_kg, total_harga]
    );
    return result.rows[0];
};

const update = async (id, data) => {
    const { nama_pelanggan, paket_utama, item_tambahan, berat_kg, total_harga } = data;
    const result = await pool.query(
        'UPDATE pesanan SET nama_pelanggan = $1, paket_utama = $2, item_tambahan = $3, berat_kg = $4, total_harga = $5 WHERE id = $6 RETURNING *',
        [nama_pelanggan, paket_utama, item_tambahan, berat_kg, total_harga, id]
    );
    return result.rows[0];
};

const remove = async (id) => {
    await pool.query('DELETE FROM pesanan WHERE id = $1', [id]);
};

module.exports = { getAll, getById, create, update, remove };