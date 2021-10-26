const path = require('path');
const { body } = require('express-validator');

const validationUser = [
    body('nombreProducto').notEmpty().withMessage('Ingrese el nombre del Producto'),
    body('descripcionProd').notEmpty().withMessage('Ingrese la descripcion del Producto'),        
    body('categoriaProd').notEmpty().withMessage('Seleccione una categoria para el Producto'),
    body('precioProducto').notEmpty().withMessage('Ingrese un precio para el Producto'),
    body('cantidadProducto').notEmpty().withMessage('Ingrese la cantidad del Producto'),
        
    body('imageProduct').custom((value, { req })=>{
        let file = req.files;
        let extensionesValidas = ['.jpg','.png','.gif','.jpeg'];
        
       for (const key in file) {           
               const element = file[key];
               console.log("Estoy en el multer add " + (element))
       }
      
        if (!file){            
            throw new Error('Debes incluir una imagen');
        }else{
            let extencionesImg = path.extname(file.originalname)
                if (!extensionesValidas.includes(extencionesImg)) {
                    throw new Error(`La extensiones validas son ${extensionesValidas.join(', ')}`);
                }
        }
        //despues de la validacion se debe retornar un true
        return true;

    }),

]

module.exports = validationUser;