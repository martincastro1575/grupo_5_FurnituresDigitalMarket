const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'))

const mainController = {
    'home': (req, res) => {
        let producthotSales = products.filter(product =>
                product.category == 'hotSales'
            )
        
        let productsInSales = products.filter(product =>
                product.category == 'inSale'
            )
        
        let newProducts = products.find(product =>
                product.category == 'newSales'
            )

        return res.render('home', {
            producthotSales: producthotSales,
            productsInSales: productsInSales,
            newProducts: newProducts,
            title: 'Home FDMk'
        });
    },
};

module.exports = mainController;