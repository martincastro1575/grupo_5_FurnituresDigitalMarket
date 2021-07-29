const producController = {
    'producstAdd': (req, res) =>{

    },

    'productsEdit': (req, res)=>{
        res.render('productEdit',{
            title: 'Edición de Productos'
        })
    },

    'producstInquery': (req, res) =>{
        
    }

}

module.exports = producController