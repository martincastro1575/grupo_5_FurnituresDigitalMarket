const db = require('../../database/models');
const Op = db.Sequelize.Op;

module.exports = {
    list: (req, res) => {
        db.User
        .findAll(
            {attributes: ['id', 'name', 'lastname', 'email']}
        )
        .then(users =>{
            return res.json({
                total: users.length,
                data: users,
                status: 200
            })
        })
       
    },

    searchById: (req, res) =>{
        db.User
        .findByPk(req.params.id)
        .then(users =>{
            return res.json({
                data: users,
                status: 200
            })
        })
    },
}

