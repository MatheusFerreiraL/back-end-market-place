const express = require('express');
const loginStore = require('./controllers/loginStore');
const { registerStore } = require('./controllers/registerStore');
const loggedAuth = require('./middlewares/loggedAuth');
const verifyRequestBody = require('./middlewares/verifyRequestBody');
const storeLoginSchema = require('./schemas/storeLoginSchema');
const storeSchema = require('./schemas/storeSchema');

const routes = express();

routes.post('/register', verifyRequestBody(storeSchema), registerStore);
routes.post('/login', verifyRequestBody(storeLoginSchema), loginStore);

routes.use(loggedAuth);

routes.get('/', (req, res) => {
  return res.json(req.store);
});

module.exports = routes;
