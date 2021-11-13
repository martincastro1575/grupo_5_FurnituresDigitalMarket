module.exports = function(sequelize, DataTypes){

    let alias = 'Status';

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        description:{
            type: DataTypes.STRING,
            allowNull: false
        },
        dominio:{
            type: DataTypes.STRING,
            allowNull: false
        }
    };

    let config = {
        tableName: "status",
        timestamps: false
    };

    let Status = sequelize.define(alias, cols, config);

    Status.associate = function(models){
/*         Status.belongsTo(models.Purchase,{
            as : 'purchase',
            foreignKey: 'id_user',
            otherKey: 'id_status',
            otherKey:'id_payment',
            otherKey: 'id_adress',
            timestamps: false,
            allowNull: false
        });
        Status.belongsTo(models.User,{
            as : 'users',
            foreignKey: 'id_role',
            foreignKey: 'id_status',
            timestamps: false,
            allowNull: false
        }); */
    }

    return Status;
}