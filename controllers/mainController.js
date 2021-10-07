const fs = require('fs');
const path = require('path');
const db = require('../database/models')

const {slice} = require('lodash')


const productsPath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'))

const models = require('../database/models')

const mainController = {
    'home': async (req, res) => {
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
        const lastProduct = await db.Product.findAll({
            order: [
                ['created_at', 'DESC'],
            ],
            include: [{
                model: db.ProductCategory,
                as: 'categories'
            },
            {
                model: db.Image,
                as: 'images'
            }]
        })

        let producthotSales = slice(allProducts, 0 , 5)
        
        let productsInSales =  slice(allProducts, 6 , 11)
        
        let newProducts = allProducts[0]
        return res.render('home', {
            producthotSales: producthotSales,
            productsInSales: productsInSales,
            newProducts: newProducts,
            title: 'Home FDMk',
        });
    },
};

module.exports = mainController;