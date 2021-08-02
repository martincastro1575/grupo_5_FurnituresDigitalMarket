const producController = {
    'producstAdd': (req, res) =>{

    },

    'productsEdit': (req, res)=>{
        res.render('products/productEdit',{
            title: 'Edición de Productos',
            product: req.query.descriptionProduct,
        })
    },

    'productList': (req, res) =>{
        let products=[
            {
                id: 1,
                product: 'Set comedor',
                description: 'Set comedor',
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
                image: 'cocielec1.png',
                price: 620000,
                money:'$',
                discount: 7,
                stock: 5,
            
            },  
        ]  
        
        
        res.render('products/productList',{
            products: products,
            title: 'Listado de Productos'
        })

    },

}

module.exports = producController