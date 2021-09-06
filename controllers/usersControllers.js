const { validationResult } = require('express-validator');
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
            
            // res.send('Success');
            res.send(req.body);

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

    'processUser': (req, res)=>{
        const resultErros= validationResult(req)
        
        if (!resultErros.isEmpty()){
            
            res.render('users/register',{
                errors: resultErros.mapped(),
                oldData: req.body,
                title: 'Registro de Usuario'    
            })        
        }else{
            res.send('Las validaciones de usuario estan OK');
        }

    },

    'profile': (req, res)=>{
        res.send('Estoy en Procfile');
    },

    'usersEdit': (req, res) =>{

    },

    'usersInquery': (req, res) =>{

    },
}

module.exports = userController;