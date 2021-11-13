const path = require('path');
const { body } = require('express-validator');

const validationProdcut = [
    body('nombreProducto')
        .notEmpty().withMessage('Ingrese el nombre del Producto')
        .isLength({min:5}).withMessage('Debe tener al menos 5 caracteres'),
    body('descripcionProd')
        .notEmpty().withMessage('Ingrese la descripcion del Producto')
        .isLength({min:20}).withMessage('Debe tener al menos 20 caracteres'),        
    body('categoriaProd').notEmpty().withMessage('Seleccione una categoria para el Producto'),
    body('precioProducto').notEmpty().withMessage('Ingrese un precio para el Producto'),
    body('cantidadProducto').notEmpty().withMessage('Ingrese la cantidad del Producto'),
        
    body('imageProduct').custom((value, { req })=>{
        let file = req.files;
        let extensionesValidas = ['.jpg','.png','.gif','.jpeg'];
        
        //console.log("Estoy en el addProduct midelWare: " + file)
        if (!file){            
            throw new Error('Debes incluir una imagen');
        }else{
            for (const key in file) {           
                const element = file[key];
                let extencionesImg = path.extname(element.originalname)
                if (!extensionesValidas.includes(extencionesImg)) {
                    throw new Error(`La extensiones validas son ${extensionesValidas.join(', ')}`);
                }
                
                //console.log("Estoy en el multer add " + path.extname(element.originalname))
            }
        }
        //despues de la validacion se debe retornar un true
        return true;

    }),

]

module.exports = validationProdcut;