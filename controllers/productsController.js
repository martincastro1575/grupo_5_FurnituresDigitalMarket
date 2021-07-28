const producController = {
    'productsEdit': (req, res)=>{
        res.render('productEdit',{
            title: 'Edición de Productos'
        })
        
    }

}
module.exports = producController