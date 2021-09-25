module.exports=(sequelize, dataTypes)=>{
    let alias = 'Role';

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



    const Role = sequelize.define(alias, cols, config)

    return Role
}