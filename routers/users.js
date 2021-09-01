const express = require('express');
const routerUser = express.Router();
const { body } = require('express-validator');
const path = require('path');
//const multer = require('multer');


const userController = require('../controllers/usersControllers');
//const router = require('./mainRoutes');

const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

//constantes a validaciones
const upload_image = require('../middlewares/multerMiddlewares');
const validationUser = require('../middlewares/registerValMiddleware')

//Valida datos del login
routerUser.get('/login', userController.userLogin);
routerUser.post('/login', [
    body('nombreUser').isEmail().withMessage('Debe ser un Email valido'),
    body('passUser').isLength({min: 8}).withMessage('El password debe tener al menos 8 caracteres')
], userController.processLogin);

//muestra form de registro
routerUser.get('/registro', guestMiddleware, userController.usersAdd);
//procesar el registro
routerUser.post('/registro', upload_image.single('imageUser'), validationUser, userController.processUser);

//Perfil de Usuario
routerUser.get('profile/:userId', userController.profile);


// *** Ruta de prueba
routerUser.get('/check', (req, res) => {
    if(req.session.usuarioLogueado == undefined){
        res.send('No estas logueado')
    }else{
        res.send('El usuario logueado es: ' +  req.session.usuarioLogueado.email)
    }
})
// *** Fin ruta de prueba

module.exports = routerUser;