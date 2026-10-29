const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/status', apiController.status);
router.get('/produk', apiController.produk);

module.exports = router;