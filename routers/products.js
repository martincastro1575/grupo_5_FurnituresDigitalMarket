const express = require('express');
// const producController = require('../controllers/productsController');
const router = express.Router();

//declaramos el middleware a nivel de ruta
const logMiddleWareDB = require('../middlewares/logDBMiddleware')

const productController = require('../controllers/productsController');


router.get('/editar/:id/', productController.productsEdit)
router.put('/editar/:id', productController.productsUpdate)

router.get('/agregar', productController.crearProducto)
//colocamos el middleware entre la ruta y el controller
// router.post('/guardarProducto', logMiddleWareDB, productController.guardarProducto)
router.post('/guardarProducto', productController.guardarProducto)

router.post('/eliminar/:id', productController.productDelete)

router.get('/listado', productController.productList)


module.exports = router