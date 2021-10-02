const fs = require('fs');
const path = require('path');
const { signedCookie } = require('cookie-parser');
const db = require('../database/models')
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const { response } = require('express');

const productsPath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));

const productsController = {
    'crearProducto': (req, res) =>{
        // let allStatus = db.
        let allCategory = db.ProductCategory.findAll({
            order: [
                ['title','ASC']
            ]
        }).then((allCategory)=>{

            //return res.send(allCategory)
            res.render('products/productAdd', {
                title:"Un nuevo Producto",
                categories: allCategory,
            })
        });

       
    },

    'guardarProducto': (req, res) =>{
        //let nuevoId = products[products.length - 1].id + 1
        db.Product.create({
                name: req.body.nombreProducto,
                price: req.body.precioProducto,
                id_category: req.body.categoriaProd,
                discount: req.body.discountProducto,
                description: req.body.descripcionProd,
                width: req.body.ancho,
                high: req.body.alto,
                length: req.body.largo,
                quantity: req.body.cantidadProducto,
                stock_min: req.body.cantidadMinima,
                stock_max: req.body.cantidadMaxima,
            
            }).then(response => {                
                //obtengo el del producto para poder relacionar con img
                let idPro = response.id
                //almaceno los archivos devueltos
                let files = req.files
                
                files.forEach(file => {
                    db.Image.create({
                        id_product: idPro,
                        name: file.filename

                    })
                })
        })

		// let nuevoProducto = {
        //     id: nuevoId,
        //     name: req.body.nombreProducto,
        //     price: req.body.precioProducto,
        //     category: req.body.categoriaProd,
        //     discount: req.body.discountProducto,
        //     description: req.body.descripcionProd,
        //     image: req.file.filename, //de este manera se llama usando multer
        //     w: req.body.ancho,
        //     h: req.body.alto,
        //     l: req.body.largo,
        //     stock: req.body.cantidadProducto,
		// }

		// products.push(nuevoProducto);
		// fs.writeFileSync(productsPath, JSON.stringify(products));
        res.redirect('/producto/listado');
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
        // fs.writeFileSync(productsPath, JSON.stringify(products));
        // res.redirect('/producto/editar/' + idProduct);
        

    },

    'productDelete':(req, res)=>{
        let idProduct = req.params.id;

        products = products.filter(product=>{
            return product.id != idProduct
        })
        fs.writeFileSync(productsPath, JSON.stringify(products));
        res.redirect('/producto/listado');

    },

    'productList': (req, res) =>{  
        
        res.render('products/productList',{
            products: products,
            title: 'Listado de Productos'
        })

    },

    'search':(req, res) =>{
        let buscaProduct = req.query.searchProd;

        let resultado = [];

        products.forEach(product => {
            if (product.name.includes(buscaProduct)){
                resultado.push(product)
            }
        })

        res.render('./products/productSearch', {
            resultado : resultado,
            title: 'Resultado de Busqueda',
            cantidad: resultado.length
        })
        

    },

}

module.exports = productsController