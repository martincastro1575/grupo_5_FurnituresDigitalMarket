const express = require('express');
// const path = require('path');
const app = express();
const methodOverride = require('method-override');
const routes = require('./routers/mainRoutes');
const routesProducts = require('./routers/products');

// const routerEjemplo = require('./routers/rutaEjemplo')
const routerUser = require('./routers/users');

//requiriendo el middleware
const logMiddleWare = require('./middlewares/logMiddleware');



app.use(express.static('public'));

// Se agregan estas lineas para trabajo con metodo POST
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//************************************************* */

//Se agrega esta linea para poder trabajar con PUT y DELETE
app.use(methodOverride('_method'));
//************************************************** */

// const publicPath = path.resolve(__dirname, './public')
// app.use(express.static(publicPath))

app.set('view engine', 'ejs');

//Hago de uso global el middleware
app.use(logMiddleWare);

app.use('/', routes);
app.use('/producto', routesProducts);
// app.use('/editar', routesProducts);
// app.use('/listar', routesProducts);
// app.use('/agregar', routesProducts);
app.use('/user', routerUser);


app.listen(process.env.PORT || 3000, ()=>{
    console.log('Corriendo servidor Express:3000');
})