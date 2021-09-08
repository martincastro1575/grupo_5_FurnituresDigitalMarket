const path = require('path');
const { body } = require('express-validator');

const validationLogin = [
    body('nombreUser').isEmail().withMessage('Debe ser un Email valido').bail,
    body('passUser').isLength({min: 8}).withMessage('El password debe tener al menos 8 caracteres'),
    body('userPass').notEmpty().withMessage('Ingrese la clave'),
    body('confirmPass').notEmpty().withMessage('Repita la clave'),
]


module.exports = validationLogin;