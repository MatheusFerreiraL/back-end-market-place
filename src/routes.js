const express = require('express');
const { registerStore } = require('./controllers/registerStore');
const verifyRequestBody = require('./middlewares/verifyRequestBody');
const storeSchema = require('./schemas/storeSchema');

const routes = express();

routes.post('/register', verifyRequestBody(storeSchema), registerStore);

module.exports = routes;
