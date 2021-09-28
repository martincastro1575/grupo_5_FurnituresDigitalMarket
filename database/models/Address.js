module.exports = (sequelize, dataTypes) => {
  let alias = "Address";

  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: dataTypes.STRING(500),
      allowNull: false,
    },
    idUser: {
      type: dataTypes.INTEGER,
    },
    idAddressBill: {
      type: dataTypes.INTEGER,
    },
  };

  let config = {
    timestamps: true,
    tableName: "address",
    underscore: true,
    updatedAt: false
  };

  const Address = sequelize.define(alias, cols, config)
  Address.associate = function (models) {
    Address.belongsTo(models.User,{
        as:'users',
        foreignKey: 'idUser'
    })
  }

  return Address
}