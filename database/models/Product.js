module.exports=(sequelize, dataTypes)=>{
    let alias = 'Product';

    let cols = {


    }

    let config = {

    }



    const Product = sequelize.define(alias, cols, config)

    return Product
}