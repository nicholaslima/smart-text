

const { Router } = require('express');

const jogadorController = require('../controllers/jogadorController.js');

const routes = Router();

routes.post('/',jogadorController.post);
routes.get('/',jogadorController.index);
routes.get('/find/:id',jogadorController.find);


module.exports = routes;

