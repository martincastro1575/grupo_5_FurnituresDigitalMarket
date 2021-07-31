const producController = {
    'producstAdd': (req, res) =>{

    },

    'productsEdit': (req, res)=>{
        res.render('products/productEdit',{
            title: 'Edición de Productos'
        })
    },

    'producstInquery': (req, res) =>{
        
    }

}

module.exports = producController