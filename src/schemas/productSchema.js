const Joi = require('joi');

const productSchema = Joi.object({
  title: Joi.string().max(200).required().messages({
    'any.required': 'The title is mandatory!',
    'string.empty': 'The title is mandatory!',
    'string.base': 'You must choose a valid title!',
  }),
  description: Joi.string().max(2100).required().messages({
    'any.required': 'The description is mandatory!',
    'string.empty': 'The description is mandatory!',
    'string.base': 'You must choose a valid description!',
  }),
  price: Joi.number().min(0).required().messages({
    'any.required': 'The price is mandatory!',
    'number.min': 'You must insert a valid value for this product!',
    'number.base': 'You must choose a valid price!',
  }),
  category: Joi.string().required().messages({
    'any.required': 'The description is mandatory!',
    'string.empty': 'The description is mandatory!',
    'string.base': 'You must choose a valid description!',
  }),
});

module.exports = productSchema;
