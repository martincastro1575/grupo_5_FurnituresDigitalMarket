const { kMaxLength } = require('buffer');
const express = require('express');
const path = require('path');
// const producController = require('../controllers/productsController');
const router = express.Router();

//MiddleWare de validacion
const addProductValMiddleware = require('../middlewares/addProductValMiddleware')
const updateProductValMiddleware = require('../middlewares/updateProductValMiddleware')

//Requeriendo Multer
//const multer = require('multer');
//declaramos el middleware a nivel de ruta
// const logMiddleWareDB = require('../middlewares/logDBMiddleware')

const productController = require('../controllers/productsController');
const upload_image = require('../middlewares/multerProductsMiddlewares');

//Configuracion de multer
// const storage = multer.diskStorage({
//     destination: (req, file, cb)=>{
//         cb(null, path.join(__dirname, '../public/images'))
//     },

//     filename: (req, file, cb)=>{
//         //console.log(file);
//         const newFilename = 'prod-' + Date.now() + path.extname(file.originalname);
//         cb(null, newFilename);
//     },
// })

// const upload = multer({ storage: storage});
//********************************************* */


router.get('/editar/:id', productController.productsEdit);
router.post('/editar/:id', updateProductValMiddleware, productController.productsUpdate);

router.get('/agregar', productController.crearProducto);
//colocamos el middleware entre la ruta y el controller
// router.post('/guardarProducto', logMiddleWareDB, productController.guardarProducto)
//router.post('/guardarProducto', upload.single('imageProduct'),productController.guardarProducto);
router.post('/guardarProducto', upload_image.array('imageProduct'),addProductValMiddleware,productController.guardarProducto);

router.post('/eliminar/:id', productController.delete);
router.get('/eliminar/:id', productController.delete);

router.get('/listado', productController.productList);
router.get('/search', productController.search);

router.get('/detail/:id', productController.detail);


module.exports = router