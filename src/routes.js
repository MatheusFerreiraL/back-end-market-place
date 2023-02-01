const express = require('express');
const loginStore = require('./controllers/loginStore');
const { registerStore } = require('./controllers/registerStore');
const updateStore = require('./controllers/updateStore');
const loggedAuth = require('./middlewares/loggedAuth');
const verifyRequestBody = require('./middlewares/verifyRequestBody');
const storeLoginSchema = require('./schemas/storeLoginSchema');
const storeSchema = require('./schemas/storeSchema');
const storeUpdateSchema = require('./schemas/storeUpdateSchema');

const routes = express();

routes.post('/register', verifyRequestBody(storeSchema), registerStore);
routes.post('/login', verifyRequestBody(storeLoginSchema), loginStore);

routes.use(loggedAuth);

routes.put('/user/:id', verifyRequestBody(storeUpdateSchema), updateStore);

module.exports = routes;
