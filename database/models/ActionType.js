module.exports=(sequelize, dataTypes)=>{
    let alias = 'ActionType';

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        name:{
            type: dataTypes.STRING(50),
            allowNull: false,
        },

        description:{
            type: dataTypes.STRING(50),
            allowNull: false,
        },

        created_at:{
            type:dataTypes.DATE,
        },
    }

    let config = {
        timestamps: true,
        tableName: 'action_type',
        createdAt: 'created_at',

    }



    const ActionType = sequelize.define(alias, cols, config)

    return ActionType
}