

const { Router } = require('express');

const playerController = require('../controllers/playerController');

const routes = Router();

routes.get('/',playerController.index);
routes.get('/find/:id',playerController.find);


module.exports = routes;

