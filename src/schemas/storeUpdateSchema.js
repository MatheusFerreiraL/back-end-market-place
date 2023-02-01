const Joi = require('joi');

const storeUpdateSchema = Joi.object({
  name: Joi.string().messages({
    'string.empty': 'The store name field is mandatory!',
    'string.base': 'You must choose a valid name!',
  }),
  email: Joi.string().email({ minDomainSegments: 2 }).messages({
    'string.empty': 'The email field is mandatory!',
    'string.email': 'You must use an valid email!',
    'string.base': 'You must choose a valid email!',
  }),
  password: Joi.string().min(5).messages({
    'string.min': 'The password must have, at least, 5 characters!',
    'string.empty': 'You must choose a valid password!',
    'string.base': 'You must choose a valid password!',
  }),
})
  .or('name', 'email', 'password')
  .messages({
    'object.missing': 'At least one field must be informed to properly update!',
  });

module.exports = storeUpdateSchema;
