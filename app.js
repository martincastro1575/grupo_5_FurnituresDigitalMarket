const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const routes = require('./routers/mainRoutes');
const routesProducts = require('./routers/products');

// const routerEjemplo = require('./routers/rutaEjemplo')
const routerUser = require('./routers/users');

//requerimos express session
const session = require('express-session');
const cookieParser = require('cookie-parser');
//requiriendo el middleware para Cookie
const recordameMiddleware = require('./middlewares/cookieRecordameMiddleware')
//const logMiddleWare = require('./middlewares/logMiddleware');


//app.use(express.static('public'));

// Se agregan estas lineas para trabajo con metodo POST
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//************************************************* */

// Se agregan para el uso de cookies
app.use(cookieParser());
//************************************************ */

//Se agrega esta linea para poder trabajar con PUT y DELETE
app.use(methodOverride('_method'));
//************************************************** */

//Creamos el middleware session y lo ejecutamos global
app.use(session({secret: 'Esto es un secreto!!!'}))

//Hago uso del middleware global o aplicacion 
app.use(recordameMiddleware);

const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath))

app.set('view engine', 'ejs');



app.use('/', routes);
app.use('/producto', routesProducts);
// app.use('/editar', routesProducts);
// app.use('/listar', routesProducts);
// app.use('/agregar', routesProducts);
app.use('/user', routerUser);

//app.use(logMiddleWare);

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Corriendo servidor Express:3000');
})