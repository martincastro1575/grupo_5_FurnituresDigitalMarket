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
        allUsers.push(userData);

        fs.writeFileSync(this.filename, JSON.stringify(allUsers, null, ' '));

        return true;
    }

}

console.log(User.create({first_name: "Myrle",
last_name: "Moretto",
email: "mmorettoj@whitehouse.gov",
password: "jUAnZ1F0",
category: "user",
image: "default.png",
isActive: true}));