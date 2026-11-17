const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chat.Controller');
const validateChatInput = require('../middlewares/validateChatInput');

router.post('/', validateChatInput, chatController.handleChat);

module.exports = router;