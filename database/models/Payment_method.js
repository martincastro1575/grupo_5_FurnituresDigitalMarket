module.exports = (sequelize, dataTypes) => {
  let alias = "PaymentMethod";

  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING(50),
      allowNull: false,
    },
    isActive: {
      type: dataTypes.BOOLEAN,
    },
  };

  let config = {
    timestamps: true,
    tableName: "payment_method",
    underscored: true,
    updatedAt: false
  };

  
  const PaymentMethod = sequelize.define(alias, cols, config)
    
  PaymentMethod.associate = function(models){
      PaymentMethod.hasMany(models.Purchase,{
          as:'purchase',
          foreignKey: 'idPayment'
      })
  }

  return PaymentMethod
};