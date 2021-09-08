const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs')

//requiriendo modelo JSON
const User = require('../models/Users');
const { send } = require('process');


const productsPath = path.join(__dirname, '../data/users.json');
let users = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));

const userController = {
    'userLogin': (req, res)=>{
        console.log(req.session)
        res.render('users/loginUser',{
            title:'Login de Usuario'
        })
    },

    'processLogin': (req, res)=>{
        const resultErros = validationResult(req)
        //let errors = validationResult(req);
        //let emailUser = req.body.nombreUser;         

        //busco en el modelo so existe el usuario
        let userLogin = User.findByField('email', req.body.nombreUser)

        if (userLogin){
            let verificaPassword = bcryptjs.compareSync(req.body.passUser, userLogin.password)

            if(verificaPassword){
                //por seguridad borramos de la session el password
                delete userLogin.password
                req.session.userLogin = userLogin
                console.log(req.session.userLogin)

                return res.redirect('/user/profile');

            }else{
                return res.render('users/loginUser',{
                    errors:{
                        nombreUser:{
                            msg: 'Verique las credenciales ingresadas',
                        }
                    },
                    title:'Login de Usuario',
                })
            }
        }else{
            //si no se encuentra el usuario
            return res.render('users/loginUser',{
                errors:{
                    nombreUser:{
                        msg: 'Verifique el mail ingresado',
                    }
                },
                title:'Login de Usuario',
                oldData: req.body,
            })
        }

        
        //return res.send(userLogin)
        
        // if (resultErros.errors.length > 0){
        //     let encontrarUser = users.find(user => 
        //         user.email ==  emailUser
        //         )
                
        //         if (!encontrarUser){                
        //             return res.render('./users/loginUser', {
        //             errors: resultErros.mapped(),
        //             title: 'usuario no existe',
        //         });
        //     }
            
        //     // req.session.usuarioLogueado = encontrarUser;
        //     // //Guardando en cookie
        //     // if (req.body.recordame != undefined) {
        //     //     res.cookie('recordame', encontrarUser.email, {maxAge: 90000})
        //     // }
            
        //     // res.send('Success');
        //     res.send("ALGO PASO");

        // }else{
        //     return res.render('users/loginUser', {
        //         //errors: resultErros.errors,
        //         errors: resultErros.mapped(),
        //         title: 'Login de Usuario',
        //     });
        // }
    },

    'usersAdd': (req, res)=>{
        res.render('users/register',{
            title: 'Registro de Usuario'
        })

    },

    'processUser': (req, res)=>{
        const resultErros= validationResult(req)
        
        if (resultErros.errors.length > 0){
            
            return res.render('users/register',{
                errors: resultErros.mapped(),
                oldData: req.body,
                title: 'Registro de Usuario'    
            })        
        }

        //valido que usuario con el mismo email, no se registre
        //dos veces.
        let userExists = User.findByField('email', req.body.userEmail)

        if(userExists){
            return res.render('users/register',{
                errors: {
                    userEmail:{
                        msg: 'Este email ya existe'
                    }
                },
                oldData: req.body,
                title: 'Registro de Usuario'    
            })
        }
        
        let userCreate = {
            
            nombreApellido: req.body.nombreApellido,
            sexo: req.body.sexo,
            email: req.body.userEmail,
            telefono:req.body.telefono,
            fechaNac: req.body.fechaNac,
            password: bcryptjs.hashSync(req.body.userPass),
            category: "user",
            image: req.file.filename,
            isActive: true
            
        }
        let createuser = User.create(userCreate)

         return res.redirect('/user/login')
        //return res.send('Se almaceno el registro');
        

    },

    'profile': (req, res)=>{        
        res.render('./users/userProfile', {
            title: 'Procfile de Usuario',
            user : req.session.userLogin,
        });
    },

    'usersEdit': (req, res) =>{

    },

    'usersInquery': (req, res) =>{

    },
}

module.exports = userController;