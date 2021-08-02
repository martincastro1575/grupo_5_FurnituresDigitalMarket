const express = require('express');
// const path = require('path');
const app = express();
const routes = require('./routers/mainRoutes');
const routesProducts = require('./routers/products')

const routerEjemplo = require('./routers/rutaEjemplo')
const routerUser = require('./routers/users')

app.use(express.static('public'));

// const publicPath = path.resolve(__dirname, './public')
// app.use(express.static(publicPath))

app.set('view engine', 'ejs');

app.use('/', routes);
app.use('/editar', routesProducts);
app.use('/listar', routesProducts)
app.use('/user', routerUser);


app.listen(process.env.PORT || 3000, ()=>{
    console.log('Corriendo servidor Express:3000');
})