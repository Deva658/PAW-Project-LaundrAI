require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');
if (!process.env.GEMINI_API_KEY) {
    console.error("⚠️ GEMINI_API_KEY kosong atau tidak terbaca dari .env!");
}
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

module.exports = genAI;