const pesananModel = require('../models/pesananModel');

const index = async (req, res) => {
    try {
        const pesananData = await pesananModel.getAll();
        
        res.render('index', {
            title: "LaundrAI - Manajemen Pesanan",
            pesanan: pesananData,
            produk: [] 
        });
    } catch (err) {
        console.error("Gagal mengambil data:", err);
        res.status(500).send("Terjadi kesalahan saat memuat halaman utama.");
    }
};

module.exports = { index };