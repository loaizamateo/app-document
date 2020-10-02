const express = require('express');

const config = require('../config.js');
const user = require('./components/user/network');

const app = express();

// ROUTES
app.use('/api/user', user);

// Imprimir mensaje para validar la escucha en el respectivo puerto de la API
app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto', config.api.port);
});