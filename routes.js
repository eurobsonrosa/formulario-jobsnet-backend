const express = require('express');
const controleCandidato = require('./controle/controleCandidato');
const routes = new express.Router();


routes.post('/registro', controleCandidato.register);

routes.get('/', (req, resp) => {
    resp.send('Servidor do Robson Rosa Online');
})

module.exports = routes;
