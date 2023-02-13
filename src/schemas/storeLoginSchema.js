const Joi = require('joi');

const storeLoginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': 'The email field is mandatory!',
    'string.empty': 'The email field is mandatory!',
    'string.email': 'Invalid credetials. Try again!',
    'string.base': 'Invalid credetials. Try again!',
  }),
  password: Joi.string().required().messages({
    'any.required': 'The password field is mandatory!',
    'string.empty': 'The password field is mandatory!',
    'string.base': 'Invalid credetials. Try again!',
  }),
});

module.exports = storeLoginSchema;
