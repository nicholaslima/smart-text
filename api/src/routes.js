
const express = require('express');
const textosController = require('./controllers/textosController.js');
const jogadorController = require('./controllers/jogadorController.js');
const jogoController = require('./controllers/jogoController.js');
const sessionController = require('./controllers/sessionController.js');
const routes = express.Router();


routes.get('/',textosController.index);
routes.post('/texto',textosController.post);

routes.post('/jogador',jogadorController.post);
routes.get('/jogador',jogadorController.index);
routes.get('/jogos?:id',jogadorController.jogos);

routes.post('/jogo?:id',jogoController.post);
routes.get('/jogo',jogoController.index);

routes.post('/login',sessionController.login);

module.exports = routes;