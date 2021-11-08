const db = require('../../database/models');
const { param } = require('../../routers/api/products');
const  Op = db.Sequelize.Op;
const sequelize = db.sequelize;


const productsController = {
    listado: async (req,res)=>{
        const pageNumber = Number.parseInt(req.query.page)
        const sizeLimit = Number.parseInt(req.query.size)

        let page =0;
        let size = 10
            
        if (!Number.isNaN(pageNumber) && pageNumber >0){
                page = pageNumber
        }
        
        if(!Number.isNaN(sizeLimit)){
            if(sizeLimit > 0 && sizeLimit <= 10){
                size = sizeLimit
            }
        }

        const products = await db.Product.findAndCountAll({
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
            limit: size,
            offset: page * size,
        })
        //console.log(products)

        //Agrupando cantidad de productos por Categoria
        const prodBycats = await db.ProductCategory.findAll({
            attributes: ['description', [sequelize.fn('count',sequelize.col('products.id')),'Cantidad']],
            include: [
                //model: db.Product,
                'products'
            ],
            group:['description']
        })
        //console.log(prodBycats)
        //Cantidad de prod por categoria
        let prodCategQty=[]
        prodBycats.forEach(prodCat => {
            prodCategQty.push({
                Category: prodCat.dataValues.description,
                cantidad: prodCat.dataValues.Cantidad
            })
            
            });
        // agregando detail
        products.rows.forEach(product => {
            product.dataValues.detail = `/images/products/${product.id}`
        });
        
        //Total de Paginas
        const pagesCount= Math.ceil(products.count / size)

        return res.status(200).json({
            status: 200,
            productsByPage: products.rows.length,
            pages: pagesCount,
            totalProdByCategory: prodCategQty,
            data: products.rows,
        })

    },

    productById: async (req,res)=>{
        const idProd = req.params.id
        const prodById = await db.Product.findByPk(idProd,{

            include: [{
                model: db.ProductCategory,
                as: 'categories',
                attributes:
                {
                    exclude:['is_active','createdAt']
                }
            }], 
            
        })
        
        prodById.dataValues.detail = `/images/products/${idProd}`
        return res.status(200).json({
            status:200,
            data:prodById,
        })
        
    }
}

module.exports = productsController