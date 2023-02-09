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
    'string.max': 'The description can not have more then 2100 characters!',
    'string.base': 'You must choose a valid description!',
  }),
  price: Joi.number().min(0).required().messages({
    'any.required': 'The price is mandatory!',
    'number.min': 'You must insert a valid price for this product!',
    'number.base': 'You must choose a valid price!',
  }),
  storage: Joi.number().min(0).required().messages({
    'any.required': 'The number of products is mandatory!',
    'number.min': 'You must insert a valid number of products!',
    'number.base': 'You must choose a valid valid number of products!',
  }),
  category: Joi.string().required().messages({
    'any.required': 'The description is mandatory!',
    'string.empty': 'The description is mandatory!',
    'string.base': 'You must choose a valid description!',
  }),
});

module.exports = productSchema;
