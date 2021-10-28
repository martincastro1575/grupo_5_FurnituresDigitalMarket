module.exports=(sequelize, dataTypes)=>{
    let alias = 'Rol';

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: dataTypes.STRING(12),
            allowNull: false,
        },

    }

    let config = {
        tableName: 'roles'
    }

    const Rol = sequelize.define(alias, cols, config)

        Rol.associate = function(model){
            // Product.belongsTo(models.User,{
            //     as:'users',
            //     foreignKey: 'id_role'
            // },)
        }

    return Rol
}