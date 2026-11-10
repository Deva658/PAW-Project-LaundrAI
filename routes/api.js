const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/pesanan', apiController.getAllPesanan);
router.get('/pesanan/:id', apiController.getPesananById);
router.post('/pesanan', apiController.createPesanan);
router.put('/pesanan/:id', apiController.updatePesanan);
router.delete('/pesanan/:id', apiController.deletePesanan);

module.exports = router;