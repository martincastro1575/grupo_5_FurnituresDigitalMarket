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
        timestamps: false,
        tableName: 'images',
        underscored: true,
        updatedAt: false
    }


    const Image = sequelize.define(alias, cols, config)

        Image.associate = function(models){
            Image.belongsTo(models.Product,{
                as:'products',
                foreignKey: 'id_product',
            })

        }
    return Image
}