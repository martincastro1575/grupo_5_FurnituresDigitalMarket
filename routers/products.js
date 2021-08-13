const express = require('express');
// const producController = require('../controllers/productsController');
const router = express.Router();

//declaramos el middleware a nivel de ruta
const logMiddleWareDB = require('../middlewares/logDBMiddleware')

const productController = require('../controllers/productsController');


router.get('/editar/:id/', productController.productsEdit)
router.put('/editar/:id', productController.productsEdit)


router.get('/agregar', productController.producstAdd)

//colocamos el middleware entre la ruta y el controller
router.post('/agregar', logMiddleWareDB, productController.producstAdd)

router.get('/listado', productController.productList)


module.exports = router