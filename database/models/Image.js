module.exports=(sequelize, dataTypes)=>{
    let alias = 'Image';

    let cols = {


    }

    let config = {

    }



    const Image = sequelize.define(alias, cols, config)

    return Image
}