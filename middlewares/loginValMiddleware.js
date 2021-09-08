const path = require('path');
const { body } = require('express-validator');

const validationLogin = [
    body('nombreUser').isEmail().withMessage('Debe ser un Email valido'),
    body('passUser').notEmpty().withMessage('El campo password no debe estar vacio'),
    body('passUser').isLength({min: 8}).withMessage('El password debe tener al menos 8 caracteres'),

]


module.exports = validationLogin;