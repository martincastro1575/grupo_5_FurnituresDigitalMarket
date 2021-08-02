const express = require('express');
const producController = require('../controllers/productsController');
const router = express.Router();

const productController = require('../controllers/productsController');


router.get('/producto', productController.productsEdit)
router.get('/productos', producController.productList)

module.exports = router