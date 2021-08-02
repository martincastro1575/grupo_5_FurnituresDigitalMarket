const express = require('express');
// const producController = require('../controllers/productsController');
const router = express.Router();

const productController = require('../controllers/productsController');


router.get('/editar', productController.productsEdit)
router.get('/agregar', productController.producstAdd)
router.get('/listado', productController.productList)


module.exports = router