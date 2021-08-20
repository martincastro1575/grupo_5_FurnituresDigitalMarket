const {validationResult} = require('express-validator');
const fs = require('fs');
const path = require('path');


const productsPath = path.join(__dirname, '../data/users.json');
let users = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));

const userController = {
    'userLogin': (req, res)=>{
        res.render('users/loginUser',{
            title:'Login de Usuario'
        })
    },

    'processLogin': (req, res)=>{
        let errors = validationResult(req);
        let emailUser = req.body.nombreUser;

         
        
        if (errors.isEmpty()){
            let encontrarUser = users.find(user => 
                user.email ==  emailUser
            )
    
            if (!encontrarUser){                
                return res.render('./users/loginUser', {
                    errors: [
                        {msg: 'Usuario Invalido'}
                    ],
                    title: 'usuario no existe',
                });
            }
            
            req.session.usuarioLogueado = encontrarUser;
            //Guardando en cookie
            if (req.body.recordame != undefined) {
                res.cookie('recordame', encontrarUser.email, {maxAge: 90000})
            }
            
            res.send('success');

        }else{
            return res.render('users/loginUser', {
                errors: errors.errors,
                title: 'Login de Usuario',
            });
        }
    },

    'usersAdd': (req, res)=>{
        res.render('users/register',{
            title: 'Registro de Usuario'
        })

    },

    'usersEdit': (req, res) =>{

    },

    'usersInquery': (req, res) =>{

    },
}

module.exports = userController;