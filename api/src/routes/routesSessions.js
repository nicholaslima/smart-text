

const { Router } = require('express');
const sessionController = require('../controllers/sessionController.js');


const routes = Router();

routes.post('/',sessionController.login);

module.exports = routes;