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
        let products=[
            {
                id: 1,
                product: 'Set comedor',
                description: 'Set comedor',
                category: 'Muebles',
                high: 20,
                widt:12,
                large: 20,
                image: 'sala1.png',
                price: 320000,
                money:'$',
                discount: 15,
                stock: 9,
            },

            {
                id: 2,
                product: 'Mueble de baño',
                description: 'Mueble de baño',
                category: 'Baños',
                high: 30,
                widt: 22,
                large: 50,
                image: 'baño1.png',
                price: 10000,
                money:'$',
                discount: 25,
                stock: 15,
            
            },

            {
                id: 3,
                product: 'Isla Cocina',
                description: 'Isla Cocina',
                category: 'Elctro',
                high: 20,
                widt:12,
                large: 20,
                image: 'cocina1.png',
                price: 520000,
                money:'$',
                discount: 5,
                stock: 20,
            
            },

            {
                id: 4,
                product: 'Cocina Moderna',
                description: 'Cocina Moderna',
                category: 'Cocina',
                high: 120,
                widt: 32,
                large: 45,
                image: 'cocielec1.png',
                price: 620000,
                money:'$',
                discount: 7,
                stock: 5,
            
            },
            {
                id: 5,
                product: 'Cocina Moderna',
                description: 'Cocina Moderna',
                category: 'Electro',
                high: 130,
                widt: 72,
                large:95,
                image: 'cocielec3.png',
                price: 620000,
                money:'$',
                discount: 7,
                stock: 12,
            
            },  
        ]  
        
        res.render('products/productList',{
            products: products,
            title: 'Listado de Productos'
        })

    },

}

module.exports = productsController