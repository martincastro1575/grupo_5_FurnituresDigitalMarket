const fs = require('fs');
const path = require('path');
const { signedCookie } = require('cookie-parser');
const db = require('../database/models')
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const { response } = require('express');
const { validationResult } = require('express-validator');
const session = require('express-session');

const productsPath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));

const productsController = {
    'bucarCategorias': async function(){
        let resultado = await db.ProductCategory.findAll({
            order: [
                ['title','ASC']
            ]
        });  
        return resultado      
    },

    'crearProducto': async (req, res) =>{
        let allCategory = await productsController.bucarCategorias()
        
            res.render('products/productAdd', {
                title:"Un nuevo Producto",
                categories: allCategory,
            })    
    },

    'guardarProducto': async (req, res) =>{
        
        const resultErros = validationResult(req)
        // console.log(req.body)
        // console.log("Contendido de File en el controlador: " + req.files)
        //return res.send(req.files)
        if (resultErros.errors.length > 0 ){
                
            let allCategory = await productsController.bucarCategorias()
            return res.render('products/productAdd',{
                errors: resultErros.mapped(),
                oldData: req.body,
                title: 'Registro de Producto',
                categories: allCategory,
            })        
        }
        let idUser = res.locals.userLogin.id
        
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
                //obtengo el id del producto para poder relacionar con img
                //console.log('Recuperando Id del Producto: ' + response)
                let idPro = response.id
                //almaceno los archivos devueltos
                let files = req.files
                
                files.forEach(file => {
                    db.Image.create({
                        id_product: idPro,
                        name: file.filename

                    })
                })

                db.ProductActionType.create({
                    id_action_type: 1,
                    id_product_action: idPro,
                    id_user: idUser
                })
        })


        res.redirect('/producto/listado');
    },

    'productsEdit': async (req, res)=>{
        let allCategory = await productsController.bucarCategorias()
        
        db.Product.findByPk(req.params.id,{
            include : ['categories']
        })
        .then(product=> {            
            res.render('products/productEdit',{
                title: 'Edición de Productos',
                oneProduct: product,
                categories: allCategory
            })
        })
        .catch(error => res.send(error))
    },

    'detail':async (req, res)=>{
        const producto = await db.Product.findOne({
            where:{
                id: req.params.id
            },
            include: [{
                model: db.ProductCategory,
                as: 'categories'
            },
            {
                model: db.Image,
                as: 'images'
            }]
        })
        res.render('./products/productDetail', {
            product : producto,
            title: 'hola'
        })
    },

    'productsUpdate':async (req, res)=>{
        let idProduct = req.params.id
        //return res.send(req.body)
        const resultErros = validationResult(req)
        //console.log('Id de producto: ' + idProduct)
        if (resultErros.errors.length > 0 ){                
            let allCategory = await productsController.bucarCategorias();
            // console.log('Dentro de errores: ')   
            // console.log(req.body)
            // console.log(resultErros)
            
            return res.render('products/productEdit',{
                errors: resultErros.mapped(),
                oneProduct: req.body,
                title: 'Registro de Producto',                
                categories: allCategory,
                idProduct: idProduct
            })        
        }
        // console.log("Antes del update: " )
        // console.log(req.body)
        db.Product.update({
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
        
        }, {
            where: {id: idProduct}
        })
        .then(()=> {           
           return res.redirect('/producto/editar/' + idProduct)
           
        })            
        .catch(error => res.send(error))

    },
    'delete':async (req, res)=>{
        await db.Product.destroy({
            where:{
                id: req.params.id
            }
        })
        res.redirect('/producto/listado');
    },

    'productList': async (req, res) =>{
        const allProducts = await db.Product.findAll({
            include: [{
                model: db.ProductCategory,
                as: 'categories'
            },
            {
                model: db.Image,
                as: 'images'
            }]
        })

        res.render('products/productList',{
            products: allProducts,
            title: 'Listado de Productos'
        })

    },

    'search': async (req, res) =>{
        let buscaProduct = req.query.searchProd;
        const allProducts = await db.Product.findAll({
            include: [{
                model: db.ProductCategory,
                as: 'categories'
            },
            {
                model: db.Image,
                as: 'images'
            }]
        })

       let resultado = allProducts.filter(product => product.name.toLowerCase().includes(buscaProduct.toLowerCase()))
        res.render('./products/productSearch', {
            resultado : resultado,
            title: 'Resultado de Busqueda',
            cantidad: resultado.length
        })
        

    },

    'productCart': (req, res) =>{
        res.render('products/productCart', { title: 'Resultado de Busqueda'})
        
        
    }

}

module.exports = productsController