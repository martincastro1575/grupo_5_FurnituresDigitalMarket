const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs')
const db = require("../database/models")

//requiriendo modelo JSON
const User = require('../models/Users');
const models = require('../database/models')

const {isEmpty} = require('lodash')

// const usersPath = path.join(__dirname, '../data/users.json');
// let users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));

const userController = {
    'userLogin': (req, res)=>{
        res.render('users/loginUser',{
            title:'Login de Usuario'
        })
    },

    'processLogin': async(req, res)=>{
        const resultErros = validationResult(req)       

        //busco en el modelo so existe el usuario
        let userLogin = await User.findByField(req.body.nombreUser)

        if (!isEmpty(userLogin)){
            let verificaPassword = bcryptjs.compareSync(req.body.passUser, userLogin.password)

            if(verificaPassword){
                //por seguridad borramos de la session el password
                delete userLogin.password
                //creo la session
                req.session.userLogin = userLogin
                //creo la cookie
                if(req.body.recordame){
                    res.cookie('userEmail',req.body.nombreUser, { maxAge:(1000 * 60) * 2})
                }

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

    },
    
    'logout':(req,res)=>{
        res.clearCookie('userEmail');
        req.session.destroy();
        
        return res.redirect('/')
    },

    //Muestra el form de registro
    'usersAdd': (req, res)=>{
        return res.render('users/register',{
            title: 'Registro de Usuario'
        })

    },

    //Procesa el form de registro
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

       /* if(userExists){
            return res.render('users/register',{
                errors: {
                    userEmail:{
                        msg: 'Este email ya existe'
                    }
                },
                oldData: req.body,
                title: 'Registro de Usuario'    
            })
        } */

        db.User.create({
            name: req.body.nameUser,
            lastname: req.body.lastnameUser,
            gender: "male",
            email: req.body.userEmail,
            phone: req.body.telefono,
            birthdate: req.body.fechaNac,
            password: bcryptjs.hashSync(req.body.userPass),
            image: req.file.filename,
            idRole: req.body.rol,
            idStatus: req.body.status
        })
        
        /*let userCreate = {
            
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
        
        let createuser = User.create(userCreate) */

         return res.redirect('/user/listado')

    },

    'profile': (req, res)=>{
        return res.render('./users/userProfile', {
            title: 'Procfile de Usuario',
            user : req.session.userLogin,
        });
    },

    'userEdit': async (req, res) =>{    
        const user = await models.User.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: models.Rol,
                as: 'roles'
            },{
                model: models.Status,
                as: 'status'
            },{
                model: models.Address,
                as: 'address'
            }]
        })
        res.render('users/editUser',{
            title: 'Edición de Usuarios',
            user: user,
        })
    },

    'updateUser': (req, res) =>{
        db.User.update({
            name: req.body.nameUser,
            lastname: req.body.lastnameUser,
            gender: req.body.sexo,
            email: req.body.email,
            phone: req.body.telefono,
            birthdate: req.body.fechaNac,
            /*password: bcryptjs.hashSync(req.body.userPass),
            image: req.file.filename, */
            idRole: req.body.rol,
            idStatus: req.body.status
        }, {
            where: {
                id: req.params.id
            }
        })

        return res.redirect('/user/listado')
       
        
    },


    'userDelete': async (req, res) =>{  
         await models.User.destroy({
            where: {
                id: req.params.id
            }
        })

        return res.redirect('/user/listado')
        

    },
    
    'usersList': async (req,res)=>{
        const users = await models.User.findAll({
            include: [{
                model: models.Rol,
                as: 'roles'
            },{
                model: models.Status,
                as: 'status'
            },{
                model: models.Address,
                as: 'address'
            }]
        })
        //res.send('9')

        db.User.findAll()
            .then(function(users){
                res.render("users/userList", {users: users, title:'Listado de Usuarios'}  )
            }) 

        /*res.render('users/userList',{
            users:users,
            title:'Listado de Usuarios'
        }) */
    },

    'store':(req, res)=>{
        const resultErros= validationResult(req)
        //const oneUSer = User.findByPk(req.body.id)        
        
        if (resultErros.errors.length > 0){
            //return res.send(resultErros)
            return res.render('users/editUser',{
                errors: resultErros.mapped(),
                oneUser: oneUser,
                title: 'Edición de Usuario'    
            })        
        }
        //console.log(req.body)
        res.redirect('Todo validado')
        //res.redirect('/user/edit/' + req.body.id)
    }
}
module.exports = userController;