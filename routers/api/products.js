const express = require('express');
const router = express.Router()

const productsController = require('../../controllers/api/productsController');


router.get('/products', productsController.listado)
router.get('/products/all', productsController.allProducts)
router.get('/products/:id', productsController.productById)



module.exports = router