const fs = require('fs');
const path = require('path');


const User = {
    filename: './data/users.json',
    
    getdata: function(){
        return JSON.parse(fs.readFileSync(this.filename, 'utf-8'));
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
        allUsers.push(userData);

        fs.writeFileSync(this.filename, JSON.stringify(allUsers, null, ' '));

        return true;
    }

}

console.log(User.create({id:000, first_name:'Martin', email:'mjcm@gmail.com'}));