const express = require('express');
const loginStore = require('./controllers/loginStore');
const { registerStore } = require('./controllers/registerStore');
const updateStore = require('./controllers/updateStore');
const loggedAuth = require('./middlewares/loggedAuth');
const verifyRequestBody = require('./middlewares/verifyRequestBody');
const multer = require('./services/multer');
const productSchema = require('./schemas/productSchema');
const storeLoginSchema = require('./schemas/storeLoginSchema');
const storeSchema = require('./schemas/storeSchema');
const storeUpdateSchema = require('./schemas/storeUpdateSchema');
const registerProduct = require('./controllers/registerProduct');
const updateProduct = require('./controllers/updateProduct');

const routes = express();

routes.post('/register', verifyRequestBody(storeSchema), registerStore);
routes.post('/login', verifyRequestBody(storeLoginSchema), loginStore);

routes.use(loggedAuth);

routes.put('/user', verifyRequestBody(storeUpdateSchema), updateStore);
routes.post(
  '/product',
  multer.single('archive'),
  verifyRequestBody(productSchema),
  registerProduct
);
routes.put(
  '/product/:productId',
  multer.single('archive'),
  verifyRequestBody(productSchema),
  updateProduct
);

module.exports = routes;
