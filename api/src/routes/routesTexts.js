

const { Router }  = require('express');

const textsController = require('../controllers/textsController');


const routes = Router();

routes.get('/',textsController.index);
routes.post('/',textsController.post);

module.exports = routes;