const path = require('path');
const { body } = require('express-validator');

const validationToUpdateUser = [
    body('nombreApellido').notEmpty().withMessage('Ingrese su nombre completo'),
    body('userEmail')
        .notEmpty().withMessage('Ingrese un email').bail()
        .isEmail().withMessage('Debes ingresar un email valido'),
    body('sexo').notEmpty().withMessage('Seleccione su sexo'),
    body('telefono').notEmpty().withMessage('Ingrese un numero de telefono'),
    body('fechaNac').notEmpty().withMessage('Ingrese una fecha de nacimiento'),
    
    body('imageUser').custom((value, { req })=>{
        let file = req.file;
        let extensionesValidas = ['.jpg','.png','.gif','.jpeg'];
        
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

module.exports = validationToUpdateUser;