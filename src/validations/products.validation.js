const Joi = require('joi');

const getProducts = {
  query: Joi.object().keys({
    customerId: Joi.string(),
  }),
};

const product = Joi.object().keys({
  id: Joi.string(),
  name: Joi.string(),
  price: Joi.number(),
});

const addProduct = {
  body: Joi.object().keys({
    customerId: Joi.string(),
    basket: Joi.object().keys({
      basketId: Joi.string(),
      products: Joi.array().items(product),
    }),
  }),
};

module.exports = {
  getProducts,
  addProduct,
};
