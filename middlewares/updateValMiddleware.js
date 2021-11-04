const path = require('path');
const { body } = require('express-validator');

const validationToUpdateUser = [
    body('nameUser').notEmpty().withMessage('Ingrese su nombre completo'),
    body('lastnameUser').notEmpty().withMessage('Ingrese su apellido'),
    body('email')
        .notEmpty().withMessage('Ingrese un email').bail()
        .isEmail().withMessage('Debes ingresar un email valido'),
    body('sexo').notEmpty().withMessage('Seleccione su sexo'),
    body('telefono').notEmpty().withMessage('Ingrese un numero de telefono'),
    body('fechaNac').notEmpty().withMessage('Ingrese una fecha de nacimiento'),
    body('rol').notEmpty().withMessage('Seleccione rol de usuario'),
    body('status').notEmpty().withMessage('Seleccione status de usuario'),
    
    // body('imageUser').custom((value, { req })=>{
    //     let file = req.file;
    //     let extensionesValidas = ['.jpg','.png','.gif','.jpeg'];
        
    //     if (!file){
    //         throw new Error('Debes incluir una imagen');
    //     }else{
    //         let extencionesImg = path.extname(file.originalname)
            
    //         if (!extensionesValidas.includes(extencionesImg)) {
    //             throw new Error(`La extensiones validas son ${extensionesValidas.join(', ')}`);
    //     }
        
    //     }
    //     //despues de la validacion se debe retornar un true
    //     return true;

    // }),

]

module.exports = validationToUpdateUser;