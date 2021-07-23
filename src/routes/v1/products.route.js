const express = require('express');
// const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');

const productsValidation = require('../../validations/products.validation');
// const userValidation = require('../../validations/user.validation');
// const userController = require('../../controllers/user.controller');

const getProductsController = require('../../controllers/products.controller');

// creating sub-routers
const router = express.Router();

router
  .route('/')
  .get(validate(productsValidation.getProducts), getProductsController.getProducts)
  .post(validate(productsValidation.addProduct), getProductsController.addProduct);

router.route('/list').get(getProductsController.listAllProducts);
// .post(auth('manageUsers'), validate(userValidation.createUser), userController.createUser)
// .get(auth('getUsers'), validate(userValidation.getUsers), userController.getUsers);

// router
//   .route('/:userId')
//   .get(auth('getUsers'), validate(userValidation.getUser), userController.getUser)
//   .patch(auth('manageUsers'), validate(userValidation.updateUser), userController.updateUser)
//   .delete(auth('manageUsers'), validate(userValidation.deleteUser), userController.deleteUser);

module.exports = router;
