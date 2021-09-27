module.exports=(sequelize, dataTypes)=>{
    let alias = 'Image';

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        name:{
            type: dataTypes.STRING(500),
            allowNull: false,
        },

        id_product:{
            type: dataTypes.INTEGER,
        }

    }

    let config = {
        tableName: 'images',
        idProduct: 'id_product'
    }


    const Image = sequelize.define(alias, cols, config)

        Image.associate = function(models){
            Image.hasMany(models.Product,{
                as:'products',
                foreignKey: 'idProduct',
            })

        }

    return Image
}