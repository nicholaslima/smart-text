

const { Router }  = require('express');
const authentication = require('../middleware/MiddlewareAuth');
const textsController = require('../controllers/textsController');
const routes = Router();



routes.use(authentication);

routes.get('/',textsController.index);
routes.post('/',textsController.post);

module.exports = routes;