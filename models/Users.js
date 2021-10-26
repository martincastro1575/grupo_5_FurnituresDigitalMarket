const fs = require('fs');
const path = require('path');

const models = require('../database/models')


const User = {
    filename: './data/users.json',
    
    getdata: function(){
        return JSON.parse(fs.readFileSync(this.filename, 'utf-8'));
    },

    generateId: function(){

        let allUsers = this.findAll()
        let lastUser = allUsers.pop()

        if (lastUser){
            return lastUser.id + 1
        }

        return 1
    },
    //Busca todos los usuarios
    findAll: function(){
        return this.getdata();
    },
    //Busca un Usuario
    findByPk: function(id){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id == id);

        return userFound;
    },

    //Buscando usuario por email
    findByField:  async function(email){
    //console.log('Desde funcion buscar: ' + email)
       const userFound = await models.User.findOne({
            where: {
                email: email
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
        //console.log('Retornando valor de usuario: ' + userFound)
        return userFound;
    },
    //crea un usuario
    create: function(userData){
        let allUsers = this.findAll();
        let newUser = {

            id: this.generateId(),
            ...userData
        }
        allUsers.push(newUser);

        fs.writeFileSync(this.filename, JSON.stringify(allUsers, null, ' '));

        return newUser;
    },
    update: function(id){
        let userToUpdate = this.findByPk(id)

        console.log(userToUpdate)
        return true
    },
    delete: function(id){
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(user => user.id !== id)
        
        fs.writeFileSync(this.filename, JSON.stringify(finalUsers, null, ' '));
        return true;
    },

}

//console.log(User.update(34))
module.exports = User;