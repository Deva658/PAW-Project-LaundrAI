// server.js
const express = require('express');
const app = express();
const PORT = 3000; 

const logger = require('./middlewares/logger');
const routes = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', './views');

// Gunakan Middleware
app.use(logger);

// Gunakan semua rute yang sudah disatukan
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server jalan di http://localhost:${PORT}`);
});