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
        res.render('products/productEdit',{
            title: 'Edición de Productos',
            product: req.query.product,
            descriptionProduct: req.query.descriptionProduct,
            category: req.query.categoryProduct,
            priceProduct: req.query.priceProduct,
            discountProduct: req.query.discountProduct,
            stockProduct: req.query.stockProduct,
            highProduct: req.query.highProduct,
            largeProduct: req.query.largeProduct,
            widhProduct:req.query.widhProduct,
            // image: 'sala1.png',
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