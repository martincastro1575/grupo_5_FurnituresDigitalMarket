module.exports=(sequelize, dataTypes)=>{
    let alias = 'Purchase';

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        create_at:{
            type: datatypes.DATE
        },
        id_payments: dataTypes.INTEGER,
        id_address: dataTypes.INTEGER
    }

    let config = {
        timestamps: false,
        tableName: 'purchase'
    }

    const Purchase = sequelize.define(alias, cols, config)

        Purchase.associate = function(model){
            Movie.belongsTo(models.PaymentMethod, { 
                as: "payment_method",
                foreignKey: "id_payments"
            }),
            Movie.belongsTo(models.Address, { 
                as: "address",
                foreignKey: "id_address"
            })
        }

    return Purchase
}