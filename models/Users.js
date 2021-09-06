const fs = require('fs');
const path = require('path');


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
        let userFound = allUsers.find(oneUser => oneUser.id === id);

        return userFound;
    },

    //Buscando usuario por email
    findByField: function(field, text){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);

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
    delete: function(id){
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(user => user.id !== id)
        
        fs.writeFileSync(this.filename, JSON.stringify(finalUsers, null, ' '));
        return true;
    },

}

//console.log(User.generateId())
module.exports = User;