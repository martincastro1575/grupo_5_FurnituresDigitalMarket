const express = require('express');
const routerUser = express.Router();
const {check} = require('express-validator');

const userController = require('../controllers/usersControllers');
const router = require('./mainRoutes');

const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
// const router = require('./products');

routerUser.get('/login', userController.userLogin);
routerUser.post('/login', [
    check('nombreUser').isEmail().withMessage('Debe ser un Email valido'),
    check('passUser').isLength({min: 8}).withMessage('El password debe tener al menos 8 caracteres')
], userController.processLogin);

//muestra form de registro
routerUser.get('/registro', guestMiddleware, userController.usersAdd);
//proceso el post
routerUser.post('registro', userController.usersAdd);
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