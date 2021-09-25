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

        id_status:{
            type: dataTypes.INTEGER,
        },

        id_category:{
            type: dataTypes.INTEGER,
        },

        id_measure:{
            type: dataTypes.INTEGER,
        },

        created_at:{
            type:dataTypes.TIMESTAMP,
        },


    }

    let config = {
        timestamps: true,
        createdAt: 'created_at',
        tableName: 'products',
    }

    const Product = sequelize.define(alias, cols, config)

    return Product
}