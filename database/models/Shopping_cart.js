module.exports = function(sequelize, DataTypes){
    
    let alias = 'Shopping_cart';

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }

    };

    let config = {
        tableName: "shopping_cart",
    };

    
    let Shopping_cart = sequelize.define(alias, cols, config);

    return Shopping_cart;
}