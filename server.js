const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const logger = require('./middlewares/logger');
const routes = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(logger);
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server jalan di http://localhost:${PORT}`);
});