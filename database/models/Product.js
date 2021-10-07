module.exports=(sequelize, dataTypes)=>{
    let alias = 'Product';

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        name:{
            type: dataTypes.STRING(100),
            allowNull: false,
        },

        description:{
            type: dataTypes.TEXT,
            allowNull: false,
        },

        high:{
            type: dataTypes.INTEGER,
            defaultValue: true,
        },

        width:{
            type: dataTypes.INTEGER,
            defaultValue: true,
        },

        length:{
            type: dataTypes.INTEGER,
            defaultValue: true,
        },

        price:{
            type: dataTypes.DECIMAL(10,2),
            allowNull: false,
        },

        discount:{
            type: dataTypes.INTEGER,
            defaultValue: true,
        },

        quantity:{
            type: dataTypes.INTEGER,
            defaultValue: true,
            allowNull: false,
        },

        stock_min:{
            type: dataTypes.INTEGER,
            defaultValue: true,
            allowNull: false,
        },

        stock_max:{
            type: dataTypes.INTEGER,
            defaultValue: true,
            allowNull: false,
        },

        id_category:{
            type: dataTypes.INTEGER,
        },

        idStatus:{
            type: dataTypes.INTEGER,
        },

        created_at:{
            type:dataTypes.DATE,
        },

    }

    let config = {
        timestamps: true,
        stkMin: 'stock_min',
        stkMax: 'stock_max',
        idStatus: 'id_status',
        //idCategory: 'id_category',
        //idMeasure: 'id_measure',
        tableName: 'products',
        createdAt: 'created_at',
        underscored: true,
        updatedAt: false
    }

    const Product = sequelize.define(alias, cols, config)
    Product.associate = function(models){

        // Product.belongsTo(models.Statu,{
        //     as:'status',
        //     foreignKey: 'idStatus'
        // }),
        
        Product.belongsTo(models.ProductCategory,{
            as:'categories',
            foreignKey: 'idCategory'
        }),        
        
        Product.hasMany(models.Image,{
            as:'images',
            foreignKey: 'idProduct'
        }),

        Product.belongsToMany(models.ActionType,{
            as:'actionType',
            through:'products_action_type',
            foreignKey: 'id_product_action',
            otherKey: 'id_action_type',
        })
    }

    return Product
}