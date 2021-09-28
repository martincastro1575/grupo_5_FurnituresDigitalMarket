module.exports = (sequelize, dataTypes) => {
  let alias = "ProductCategory";

  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: dataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: dataTypes.STRING(200),
      allowNull: false,
    },
    isActive: {
      type: dataTypes.BOOLEAN,
    },
  };

  let config = {
    timestamps: true,
    tableName: "product_category",
    underscore: true,
    updatedAt: false
  };
  return ProductCategory = sequelize.define(alias, cols, config);
};