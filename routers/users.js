const express = require('express');
const routerUser = express.Router();
const { body } = require('express-validator');
const path = require('path');
const multer = require('multer');


const userController = require('../controllers/usersControllers');
//const router = require('./mainRoutes');

const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

//Configuracion de multer
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, path.join(__dirname, '../public/images/avatars'))
    },
    filename: (req, file, cb)=>{
        //console.log(file);
        const newFilename = 'user-' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    },
})

//Ejecuto multer
const upload = multer({ storage: storage});


//Valida datos del login
routerUser.get('/login', userController.userLogin);
routerUser.post('/login', [
    body('nombreUser').isEmail().withMessage('Debe ser un Email valido'),
    body('passUser').isLength({min: 8}).withMessage('El password debe tener al menos 8 caracteres')
], userController.processLogin);

//muestra form de registro
routerUser.get('/registro', guestMiddleware, userController.usersAdd);


const validationUser = [
    body('nombreApellido').notEmpty().withMessage('Ingrese su nombre completo'),
    body('userEmail').notEmpty().withMessage('Ingrese un email'),
    body('telefono').notEmpty().withMessage('Ingrese un numero de telefono'),
    body('fechaNac').notEmpty().withMessage('Ingrese una fecha de nacimiento'),
    body('userPass').notEmpty().withMessage('Ingrese la clave'),
    body('confirmPass').notEmpty().withMessage('Repita la clave'),
]
//procesar el registro
routerUser.post('/registro', upload.single('imageUser'), validationUser, userController.processUser);

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