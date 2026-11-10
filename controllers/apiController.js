const pesananModel = require('../models/pesananModel');

const getAllPesanan = async (req, res) => {
    try {
        const data = await pesananModel.getAll();
        res.json({ sukses: true, data: data });
    } catch (err) {
        res.status(500).json({ sukses: false, pesan: err.message });
    }
};

const getPesananById = async (req, res) => {
    try {
        const data = await pesananModel.getById(req.params.id);
        if (!data) return res.status(404).json({ sukses: false, pesan: "Data tidak ditemukan" });
        res.json({ sukses: true, data: data });
    } catch (err) {
        res.status(500).json({ sukses: false, pesan: err.message });
    }
};

const createPesanan = async (req, res) => {
    try {
        const newPesanan = await pesananModel.create(req.body);
        res.status(201).json({ sukses: true, pesan: "Pesanan berhasil ditambahkan", data: newPesanan });
    } catch (err) {
        res.status(500).json({ sukses: false, pesan: err.message });
    }
};

const updatePesanan = async (req, res) => {
    try {
        const updatedPesanan = await pesananModel.update(req.params.id, req.body);
        res.json({ sukses: true, pesan: "Pesanan berhasil diubah", data: updatedPesanan });
    } catch (err) {
        res.status(500).json({ sukses: false, pesan: err.message });
    }
};

const deletePesanan = async (req, res) => {
    try {
        await pesananModel.remove(req.params.id);
        res.json({ sukses: true, pesan: "Pesanan berhasil dihapus" });
    } catch (err) {
        res.status(500).json({ sukses: false, pesan: err.message });
    }
};

module.exports = { getAllPesanan, getPesananById, createPesanan, updatePesanan, deletePesanan };