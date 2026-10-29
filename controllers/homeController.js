const produkModel = require('../models/produkModel');

const index = (req, res) => {
    res.render('index', {
        title: "LaundrAI - Asisten Laundry",
        produk: produkModel
    });
};

module.exports = { index };