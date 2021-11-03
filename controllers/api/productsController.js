const db = require('../../database/models');
const  Op = db.Sequelize.Op;

const productsController = {
    listado: async (req,res)=>{
        const productsList = await db.Product.findAll()
        console.log(productsList)
        return res.status(200).json({
            status: 200,
            data: productsList,
            total: productsList.length,
        })

    }
}

module.exports = productsController