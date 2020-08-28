

const { Router }  = require('express');

const textosController = require('../controllers/textosController.js');


const routes = Router();

routes.get('/',textosController.index);
routes.post('/',textosController.post);

module.exports = routes;