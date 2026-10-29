const produkModel = require('../models/produkModel');

const status = (req, res) => {
    res.json({
        status: "ok",
        aplikasi: "LaundrAI",
        uptimeDetik: Math.floor(process.uptime()),
        waktuServer: new Date().toISOString()
    });
};

const produk = (req, res) => {
    res.json({
        sukses: true,
        jumlah: produkModel.length,
        data: produkModel
    });
};

module.exports = { status, produk };