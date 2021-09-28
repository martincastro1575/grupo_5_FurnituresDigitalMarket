module.exports = function(sequelize, DataTypes){
    const Purchase_detail = sequelize.define(alias, cols, config);

    let alias = 'Purchase_detail';

    let cols = {
        
    };

    let config = {
        tableName: "purchase_detail",
        timestamps: false
    };

    let Status = sequelize.define(alias, cols, config);

    return Purchase_detail;
}