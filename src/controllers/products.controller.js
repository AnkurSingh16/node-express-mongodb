const httpStatus = require('http-status');
const pick = require('../utils/pick');
// const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { getProductsService } = require('../services');

const getProducts = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['customerId']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await getProductsService.queryProducts(filter, options);
  res.send(result);
});

const addProduct = catchAsync(async (req, res) => {
  const user = await getProductsService.addProduct(req.body);
  res.status(httpStatus.CREATED).send(user);
});

module.exports = {
  getProducts,
  addProduct,
};
