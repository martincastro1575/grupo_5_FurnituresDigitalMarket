const db = require('../../database/models');
const { param } = require('../../routers/api/products');
const  Op = db.Sequelize.Op;
const sequelize = db.sequelize;


const productsController = {
    listado: async (req,res)=>{
        const products = await db.Product.findAll({
            include: [{
                model: db.ProductCategory,
                as: 'categories',
                attributes:
                {
                    exclude:['is_active','createdAt']
                }
            }],            
            attributes:            
                {
                exclude:[
                    'high','width','length','price','discount','quantity','stock_min',
                    'stock_max', 'idCategory','idStatus','created_at','id_category',
                ]},
            
        })

        //Agrupando cantidad de productos por Categoria
        const prodBycats = await db.ProductCategory.findAll({
            attributes: ['description', [sequelize.fn('count',sequelize.col('products.id')),'Cantidad']],
            include: [{
                model: db.Product,
                as: 'products'
            }],
            group:['description']
        })
        
        //Cantidad de prod por categoria
        let prodCategQty=[]
        prodBycats.forEach(prodCat => {
            prodCategQty.push({
                Category: prodCat.dataValues.description,
                cantidad: prodCat.dataValues.Cantidad
            })
            
            });
            // agregando detail
        products.forEach(product => {
            product.dataValues.detail = `/images/products/${product.id}`
        });
        
        return res.status(200).json({
            status: 200,
            total: products.length,
            totalProdByCategory: prodCategQty,
            data: products,
        })

    },

    productById: async (req,res)=>{
        const idProd = req.params.id
        const prodById = await db.Product.findByPk(idProd,{
            include: ['categories'],
            attributes:
            {
                exclude:[
                    'id_category','idStatus','created_at','idCategory','categories.is_active'
                ]
            }
        })
        
        prodById.dataValues.detail = `/images/products/${idProd}`
        return res.status(200).json({
            status:200,
            data:prodById,
        })
        
    }
}

module.exports = productsController