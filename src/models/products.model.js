const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const getProductsSchema = new mongoose.Schema({
  customerId: {
    type: String,
    default: null,
    unique: false,
  },
  basket: {
    basketId: {
      type: String,
      required: true,
    },
    products: [
      {
        id: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
  },
});

// add plugin that converts mongoose to json
getProductsSchema.plugin(toJSON);
getProductsSchema.plugin(paginate);

/* getProductsSchema.index({ customerId: 1 }, { unique: true }); */

/**
 * @typedef getProducts
 */
const getProducts = mongoose.model('getProducts', getProductsSchema);
module.exports = getProducts;
