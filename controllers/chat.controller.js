const geminiService = require('../services/gemini.service');

const handleChat = async (req, res) => {
    try {
        const { message } = req.body;
        const reply = await geminiService.getChatResponse(message);
        res.json({ success: true, data: { reply } });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { handleChat };