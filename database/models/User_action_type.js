module.exports = function(sequelize, DataTypes){
    
    let alias = 'User_action_type';

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        }

    };

    let config = {
        tableName: "user_action_type",
    };

    let User_action_type = sequelize.define(alias, cols, config);

    User_action_type.associate = function(models){
        // User_action_type.belongsToMany(models.User,{
        //     as : 'user',
        //     foreignKey: 'id_role',
        //     foreignKey: 'id_status',
        //     timestamps: false,
        //     allowNull: false
        // });
    }

    return User_action_type;
}