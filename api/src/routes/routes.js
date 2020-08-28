
const express = require('express');
const routes = express.Router();

const routesJogador = require('./routesJogador');
const routesTextos = require('./routesTextos');
const routesJogo = require('./routesjogo');
const routesSession = require('./routesSessions');


routes.use('/jogador',routesJogador);
routes.use('/textos',routesTextos);
routes.use('/jogo',routesJogo);

routes.use('/login',routesSession);


module.exports = routes;