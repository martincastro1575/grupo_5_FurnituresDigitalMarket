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
    tableName: "products_category",
    underscored: true,
    updatedAt: false
  };

  const ProductCategory = sequelize.define(alias, cols, config)
    
  ProductCategory.associate = function(models){
      ProductCategory.hasMany(models.Product,{
          as:'products',
          foreignKey: 'idCategory'
      })
  }

  return ProductCategory
};