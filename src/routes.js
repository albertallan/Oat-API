const express = require('express');
const InformacaoController = require('./controllers/InformacaoController');
const EmailController = require('./controllers/EmailController');

const routes = express.Router();

routes.get('/informacao', InformacaoController.list)

routes.post('/informacao', InformacaoController.create)
routes.post('/opiniao', InformacaoController.opiniao)
// routes.post('/email',EmailController.sendMail)

module.exports = routes;