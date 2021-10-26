module.exports = function(sequelize, DataTypes){

    let alias = 'Purchase_detail';

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
        price:{
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    };

    let config = {
        tableName: "purchase_detail",
        timestamps: false
    };
    const Purchase_detail = sequelize.define(alias, cols, config);
    
    Purchase_detail.associate = function(models){
        Purchase_detail.belongsTo(models.Purchase,{
            as : 'purchase',
            foreignKey: 'id_user',
            otherKey: 'id_status',
            otherKey:'id_payment',
            otherKey: 'id_adress',
            timestamps: false,
            allowNull: false
        });
    }

    return Purchase_detail;
}