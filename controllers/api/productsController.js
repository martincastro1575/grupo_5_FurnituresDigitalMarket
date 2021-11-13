const db = require('../../database/models');
const { param } = require('../../routers/api/products');
const Op = db.Sequelize.Op;
const sequelize = db.sequelize;


const productsController = {
    allProducts: async(req, res) => {
        const products = await db.Product.findAndCountAll({
            include: ['categories', 'images'],
            attributes: ['id', 'name', 'description', 'price'],
            order: [['created_at', 'DESC']]
        
        })
        return res.status(200).json({
            status: 200,
            data: products,
            
        })
    },

    listado: async (req, res) => {
        const pageNumber = Number.parseInt(req.query.page)
        const sizeLimit = Number.parseInt(req.query.size)

        let page = 0;
        let size = 10

        if (!Number.isNaN(pageNumber) && pageNumber > 0) {
            page = pageNumber -1
        }

        if (!Number.isNaN(sizeLimit)) {
            if (sizeLimit > 0 && sizeLimit <= 10) {
                size = sizeLimit
            }
        }
        //EndPoint de paginacion: http://localhost:3500/api/products?page=2&size=10
        const products = await db.Product.findAndCountAll({

            include: ['categories'],
            attributes: ['id', 'name', 'description'],
            limit: size,
            offset: page * size,
        })

        //Agrupando cantidad de productos por Categoria
        const prodBycats = await db.ProductCategory.findAll({
            attributes: ['description', [sequelize.fn('count', sequelize.col('products.id')), 'Cantidad']],
            include: {
                model: db.Product,
                as: 'products',
                attributes: []
            },
            group: ['ProductCategory.description'],
            raw: true
        })
        console.log(prodBycats)
        //Cantidad de prod por categoria
        let prodCategQty = []
        prodBycats.forEach(prodCat => {
            prodCategQty.push({
                Category: prodCat.description,
                cantidad: prodCat.Cantidad
            })

        });
        // agregando detail
        products.rows.forEach(product => {
            product.dataValues.detail = `/images/products/${product.id}`
        });

        //Total de Paginas
        const pagesCount = Math.ceil(products.count / size)

        return res.status(200).json({
            status: 200,
            productsByPage: products.rows.length,
            pages: pagesCount,
            totalProdByCategory: prodCategQty,
            data: products.rows,
        })

    },

    productById: async (req, res) => {
        const idProd = req.params.id
        const prodById = await db.Product.findByPk(idProd, {

            include: [
                'categories'
            ],

        })

        prodById.dataValues.detail = `/images/products/${idProd}`
        return res.status(200).json({
            status: 200,
            data: prodById,
        })

    }
}

module.exports = productsController