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
const validationLogin = require('../middlewares/loginValMiddleware')
const validationToUpdateUser = require('../middlewares/updateValMiddleware')

//Comentada por Martin
//routerUser.post('/register', userController.processRegister);
//Comentada por Martin
//routerUser.get('/profile/:userId', userController.userProfile);


routerUser.get('/login', guestMiddleware, userController.userLogin);
routerUser.post('/login', validationLogin, userController.processLogin);

//muestra form de registro
routerUser.get('/registro', guestMiddleware, userController.usersAdd);
//procesar el registro->debe quedar parecida a esta linea
routerUser.post('/registro', upload_image.single('imageUser'), validationUser, userController.processUser);

//Perfil de Usuario
//routerUser.get('profile/:userId', userController.profile);
routerUser.get('/profile', authMiddleware, userController.profile);

//Listado users
routerUser.get('/listado', userController.usersList);

//Update User
routerUser.post('/edit/:id', upload_image.single('imageUser'),validationToUpdateUser, userController.store);

//Editarusuario
routerUser.get('/edit/:id', userController.userEdit);


//logout
routerUser.get('/logout', userController.logout);

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