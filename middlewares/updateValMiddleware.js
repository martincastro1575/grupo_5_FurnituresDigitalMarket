const path = require('path');
const { body } = require('express-validator');

const validationToUpdateUser = [
    body('nameUser').notEmpty().withMessage('Ingrese su nombre completo'),
    body('userEmail')
        .notEmpty().withMessage('Ingrese un email').bail()
        .isEmail().withMessage('Debes ingresar un email valido'),
    body('sexo').notEmpty().withMessage('Seleccione su sexo'),
    body('telefono').notEmpty().withMessage('Ingrese un numero de telefono'),
    body('fechaNac').notEmpty().withMessage('Ingrese una fecha de nacimiento'),
    body('userPass').notEmpty().withMessage('Ingrese la clave'),
    body('confirmPass').notEmpty().withMessage('Repita la clave').custom((value, { req })=>{
        if (req.body.userPass !== req.body.confirmPass && req.body.confirmPass!= undefined) {
            throw new Error('Las Claves deben ser iguales');
        }

        return true
    }),
    

]

module.exports = validationToUpdateUser;