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
        id_action_type: dataTypes.INTEGER,
        id_product_action: dataTypes.INTEGER,
        id_user: dataTypes.INTEGER
    }

    let config = {
        timestamps: false,
        tableName: 'products_action_type'
    }

    const ProductActionType = sequelize.define(alias, cols, config)

        ProductActionType.associate = function(models){
            ProductActionType.belongsTo(models.ActionType, { 
                as: "action_type",
                foreignKey: "id_action_type"
            }),
            ProductActionType.belongsTo(models.Product, { 
                as: "products",
                foreignKey: "id_product_action"
            })
        }

    return ProductActionType
}