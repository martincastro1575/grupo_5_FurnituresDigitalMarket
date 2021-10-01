module.exports=(sequelize, dataTypes)=>{
    let alias = 'ProductActionType';

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        create_at:{
            type: dataTypes.DATE
        },
        action_type_id: dataTypes.INTEGER,
        product_id: dataTypes.INTEGER
    }

    let config = {
        timestamps: false,
        tableName: 'product_action_type'
    }

    const ProductActionType = sequelize.define(alias, cols, config)

        ProductActionType.associate = function(models){
            ProductActionType.belongsTo(models.ActionType, { 
                as: "action_type",
                foreignKey: "action_type_id"
            }),
            ProductActionType.belongsTo(models.Product, { 
                as: "products",
                foreignKey: "product_id"
            })
        }

    return ProductActionType
}