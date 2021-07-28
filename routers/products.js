const express = require('express');
const router = express.Router();

const productController = require('../controllers/productsController');


router.get('/producto', productController.productsEdit)

module.exports = router