module.exports = function(sequelize, DataTypes){
    
    let alias = 'Shopping_cart';

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createdAt:{
            type: DataTypes.DATE,
            allowNull: false
        }

    };

    let config = {
        tableName: "shopping_cart",
    };

    
    const Shopping_cart = sequelize.define(alias, cols, config);

    Shopping_cart.associate = function(models){
        // Shopping_cart.belongsToMany(models.Shopping_cart_detail,{
        //     as : 'shopping_cart_detail',
        //     timestamps: false,
        //     allowNull: false
        // });
        // Shopping_cart.belongsToMany(models.User,{
        //     as : 'users',
        //     foreignKey: 'id_role',
        //     foreignKey: 'id_status',
        //     timestamps: false,
        //     allowNull: false
        // });
    
    };

    return Shopping_cart;
}