module.exports = (sequelize, dataTypes) => {
  let alias = "User";

  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    lastname: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    gender: {
      type: dataTypes.ENUM,
      values: ["male", "female", "other"],
    },
    email: {
      type: dataTypes.STRING(250),
    },
    phone: {
      type: dataTypes.STRING(15),
    },
    birthdate: {
      type: dataTypes.DATE,
    },
    password: {
      type: dataTypes.STRING(12),
    },
    image: {
      type: dataTypes.STRING(250),
    },
    idRole: {
      type: dataTypes.INTEGER,
    },
    idStatus: {
      type: dataTypes.INTEGER,
    },
    createdAt: {
      type: dataTypes.DATE,
    },
  };

  let config = {
    timestamps: true,
    tableName: "users",
    underscored: true,
    updatedAt: false
  };

  const User = sequelize.define(alias, cols, config);
    User.associate = function (models) {
     User.belongsTo(models.Status,{
        as:'status',
        foreignKey: 'idStatus'
    }), 
    User.belongsTo(models.Rol,{
        as:'roles',
        foreignKey: 'idRole'
    })
  };

  return User;
};
