const db = require('../../database/models');
const Op = db.Sequelize.Op;

module.exports = {
    list: (req, res) => {
        db.User.findAll({
            attributes: ['id', 'name', 'lastname', 'email'],
            raw: true
        })
        .then(users =>{

            users.forEach(user => {
                user.userDetail = `http://localhost:3500/api/user/detail/${user.id}`
            });

                return res.json({
                total: users.length,
                data: users,
                status: 200,
            }) 
        })

  
       
    },

    searchById: (req, res) =>{
        db.User
        .findByPk(req.params.id)
        .then(user =>{
            
            
   
            let userAvatar = 'http://localhost:3500/images/avatars/' + user.image      

            return res.json({
                data: user,
                status: 200,
                userImg: userAvatar
            })
        })
    },

    // API para ver el detalle de usuarios

    detailUser: (req, res) => {
        db.User.findByPk(req.params.id)
        .then((users)=>{
            res.json({
                data: users,
                status: 200
            })
            
        })
    }
}

