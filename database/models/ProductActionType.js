module.exports=(sequelize, dataTypes)=>{
    let alias = 'ProductActionType';

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        create_at:{
            type: datatypes.DATE
        },
        action_type_id: dataTypes.INTEGER,
        product_id: dataTypes.INTEGER
    }

    let config = {
        timestamps: false,
        tableName: 'product_action_type'
    }

    const ProductActionType = sequelize.define(alias, cols, config)

        ProductActionType.associate = function(model){
            Movie.belongsTo(models.ActionType, { 
                as: "action_type",
                foreignKey: "action_type_id"
            }),
            Movie.belongsTo(models.Product, { 
                as: "products",
                foreignKey: "product_id"
            })
        }

    return ProductActionType
}