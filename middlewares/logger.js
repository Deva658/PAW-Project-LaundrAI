// middlewares/logger.js
const fs = require('fs');
const path = require('path');

const logger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    
    res.on('finish', () => {
        // Format log: - [Timestamp] METHOD /path - STATUS
        const logMessage = `- [${timestamp}] ${req.method} ${req.originalUrl} - ${res.statusCode}\n`;
        
        // Menampilkan di terminal
        console.log(logMessage.trim());
        
        // Menulis ke dalam file logs/logger.md
        const logFilePath = path.join(__dirname, '../logs/logger.md');
        fs.appendFile(logFilePath, logMessage, (err) => {
            if (err) console.error('Gagal menulis ke logger.md:', err);
        });
    });
    
    next();
};

module.exports = logger;