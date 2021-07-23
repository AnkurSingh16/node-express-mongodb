// const httpStatus = require('http-status');
const { getProducts, productList } = require('../models');

const mockProducts = {
  customerId: '123456',
  basket: {
    basketId: '123',
    products: [
      {
        id: '123',
        name: 'product a',
        price: 1234,
      },
      {
        id: '456',
        name: 'product b',
        price: 1234,
      },
      {
        id: '789',
        name: 'product c',
        price: 1234,
      },
    ],
  },
};

const mockProductList = {
  products: [
    {
      id: '60fad63a692618b3bbed2737',
      name: 'product a',
      price: 1234,
    },
    {
      id: '60fad63a692618b3bbed2738',
      name: 'product b',
      price: 1234,
    },
    {
      id: '60fad63a692618b3bbed2739',
      name: 'product c',
      price: 1234,
    },
  ],
};
// const ApiError = require('../utils/ApiError');

/**
 * Query for Products
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryProducts = async (filter = {}, options) => {
  let products = await getProducts.paginate(filter, options);
  if (products.totalResults <= 0) {
    // mocking some products in case there are no products in D, doing this for same user
    await getProducts.create(mockProducts);
    products = await getProducts.paginate(filter, options);
  }
  return products;
};

const allProducts = async (filter = {}, options) => {
  let products = await productList.paginate(filter, options);
  if (products.totalResults <= 0) {
    // mocking some products in case there are no products in D, doing this for same user
    await productList.create(mockProductList);
    products = await productList.paginate(filter, options);
  }
  return products;
};

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const addProduct = async (userBody) => {
  return getProducts.create(userBody);
};

module.exports = {
  queryProducts,
  addProduct,
  allProducts,
};
