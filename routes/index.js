const express = require('express');
const router = express.Router();
const webRoutes = require('./web');
const apiRoutes = require('./api');
const chatRoutes = require('./chat.routes');

// Mendaftarkan rute
router.use('/api', apiRoutes);
router.use('/api/chat', chatRoutes);
router.use('/', webRoutes);

module.exports = router;