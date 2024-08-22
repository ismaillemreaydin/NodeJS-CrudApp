const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware: Body Parser
app.use(bodyParser.json());

// Rotalar
app.use('/api', userRoutes);

// Ana Sayfa Rotası
app.get('/', (req, res) => {
    res.send('Welcome to the CRUD API!');
});

module.exports = app;

