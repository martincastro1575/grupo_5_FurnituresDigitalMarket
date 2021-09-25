module.exports=(sequelize, dataTypes)=>{
    let alias = 'Role';

    let cols = {


    }

    let config = {

    }



    const Role = sequelize.define(alias, cols, config)

    return Role
}