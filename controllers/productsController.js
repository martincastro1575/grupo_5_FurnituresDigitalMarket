const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'))

const productsController = {
    'producstAdd': (req, res) =>{
        res.render('products/productAdd', {
            title: 'Agregar Producto',
        })
    },

    'productsEdit': (req, res)=>{
        let idProduct = req.params.id;

        let oneProduct = products.find(product=>
                product.id == idProduct
            )
        res.render('products/productEdit',{
            title: 'Edición de Productos',
            oneProduct: oneProduct,
        })
    },

    'productsUpdate':(req, res)=>{
        let idProduct = req.params.id;

        products.forEach(product => {
            if (product.id == idProduct){
                product.name = req.body.nombreProducto;
                product.description = req.body.descripcionProd;
                product.category = req.body.categoryProducto;
                product.price = req.body.precioProducto;
                product.discount = req.body.discountProducto;
                product.w = req.body.ancho;
                product.l = req.body.largo;
                product.h = req.body.alto;
            }
        });
        fs.writeFileSync(productsPath, JSON.stringify(products));
        res.redirect('/producto/editar/' + idProduct);

    },

    'productList': (req, res) =>{  
        
        res.render('products/productList',{
            products: products,
            title: 'Listado de Productos'
        })

    },

}

module.exports = productsController