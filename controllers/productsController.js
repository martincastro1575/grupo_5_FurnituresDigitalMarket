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

    'productList': (req, res) =>{  
        
        res.render('products/productList',{
            products: products,
            title: 'Listado de Productos'
        })

    },

}

module.exports = productsController