const Joi = require('joi');

const storeSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'The store name field is mandatory!',
    'string.empty': 'The store name field is mandatory!',
    'string.base': 'You must choose a valid name!',
  }),
  email: Joi.string().email({ minDomainSegments: 2 }).required().messages({
    'any.required': 'The email field is mandatory!',
    'string.empty': 'The email field is mandatory!',
    'string.email': 'You must use an valid email!',
    'string.base': 'You must choose a valid email!',
  }),
  password: Joi.string().min(5).required().messages({
    'any.required': 'The password field is mandatory!',
    'string.min': 'The password must have, at least, 5 characters!',
    'string.empty': 'You must choose a valid password!',
    'string.base': 'You must choose a valid password!',
  }),
});

module.exports = storeSchema;
