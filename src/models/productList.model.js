const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const productSchema = new mongoose.Schema({
  products: [
    {
      id: {
        type: mongoose.SchemaTypes.ObjectId,
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
});

// add plugin that converts mongoose to json
productSchema.plugin(toJSON);
productSchema.plugin(paginate);

/* getProductsSchema.index({ customerId: 1 }, { unique: true }); */

/**
 * @typedef getProducts
 */
const productList = mongoose.model('product', productSchema);
module.exports = productList;
