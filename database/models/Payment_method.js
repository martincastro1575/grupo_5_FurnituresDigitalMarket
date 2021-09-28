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
    underscore: true,
    updatedAt: false
  };

  return PaymentMethod = sequelize.define(alias, cols, config);
};