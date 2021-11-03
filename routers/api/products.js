const express = require('express');
const router = express.Router()

const productsController = require('../../controllers/api/productsController');


router.get('/products', productsController.listado)


module.exports = router