

const express = require('express');
const jogoController = require('../controllers/jogoController.js');
const jogoRepository = require('../repository/JogoRepository');
const AppError = require('../errors/AppErrors');
const jogosRepository = new jogoRepository();
const routes =  express.Router();


routes.post('/jogador?:id',jogoController.post);
routes.get('/',jogoController.index);

routes.get('/jogador?:id',jogoController.jogosJogador);


module.exports = routes;