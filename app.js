const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const routes = require('./routers/mainRoutes');
const routesProducts = require('./routers/products');

//Rutas para API
const routeApiProducts = require('./routers/api/products')

// const routerEjemplo = require('./routers/rutaEjemplo')
const routerUser = require('./routers/users');

//OJO!!!!! SE DEBE QUITAR ESTA LINEA
//const moviesRouter = require('./routers/movies');//

//requerimos express session
const session = require('express-session');
const cookieParser = require('cookie-parser');

//requiriendo el middleware para Cookie
const recordameMiddleware = require('./middlewares/cookieRecordameMiddleware')
//const logMiddleWare = require('./middlewares/logMiddleware');

//app.use(express.static('public'));
const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath))

// Se agregan estas lineas para trabajo con metodo POST
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//************************************************* */

//Se agrega esta linea para poder trabajar con PUT y DELETE
app.use(methodOverride('_method'));
//************************************************** */

//Creamos el middleware session de aplicacion  y lo ejecutamos global
app.use(session({
    secret: 'LPMQLP!!!',
    resave: false,
    saveUninitialized:false,
}))

// Se agregan para el uso de cookies
app.use(cookieParser());
//************************************************ */

//requiriendo Middleware de usuario logeado
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware')

//Hago uso del middleware global o aplicacion 
app.use(recordameMiddleware);

//Hago uso del middleware de logeado
app.use(userLoggedMiddleware)

//seteo el template de vistas
app.set('view engine', 'ejs');

app.use('/', routes);
app.use('/producto', routesProducts);
app.use('/user', routerUser);
app.use('/api',routeApiProducts)

//OJO!!!!, SE DEBE QUITAR ESTA RUTA
//app.use('/movies', moviesRouter);//

//app.use(logMiddleWare);

app.listen(process.env.PORT || 3500, ()=>{
    console.log('Corriendo servidor Express:3500');
})