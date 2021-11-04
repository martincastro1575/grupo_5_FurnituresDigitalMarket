const db = require('../../database/models');
const  Op = db.Sequelize.Op;

const productsController = {
    listado: async (req,res)=>{
        const products = await db.Product.findAll({
            include: [{
                model: db.ProductCategory,
                as: 'categories'
            }],
            attributes: {
                exclude:[
                    'high','width','length','price','discount','quantity','stock_min',
                    'stock_max', 'idCategory','idStatus','created_at','id_category'
                ]
            }
        })
        products.forEach(product => {
            console.log(product.dataValues.id)
        });
        return res.status(200).json({
            status: 200,
            total: products.length,
            data: products,
        })

    }
}

module.exports = productsController