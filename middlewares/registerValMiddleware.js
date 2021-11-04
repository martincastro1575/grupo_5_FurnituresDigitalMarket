const path = require('path');
const { body } = require('express-validator');

const validationUser = [
    body('nameUser').notEmpty().withMessage('Ingrese su nombre completo'),
    body('userEmail')
        .notEmpty().withMessage('Ingrese un email').bail()
        .isEmail().withMessage('Debes ingresar un email valido'),
    body('sexo').notEmpty().withMessage('Seleccione su sexo'),
    body('telefono').notEmpty().withMessage('Ingrese un numero de telefono'),
    body('fechaNac').notEmpty().withMessage('Ingrese una fecha de nacimiento'),
    body('userPass').notEmpty().withMessage('Ingrese la clave'),
    //body('confirmPass').notEmpty().withMessage('Repita la clave'),
    body('confirmPass').notEmpty().withMessage('Repita la clave').custom((value, { req })=>{
        if (req.body.userPass !== req.body.confirmPass && req.body.confirmPass!= undefined) {
            throw new Error('Las Claves deben ser iguales');
        }

        return true
    }),


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
    body('rol').notEmpty().withMessage('Seleccione rol de usuario'),
    body('status').notEmpty().withMessage('Seleccione status de usuario'),

]

module.exports = validationUser;