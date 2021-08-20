const fs = require('fs');
const path = require('path');


const productsPath = path.join(__dirname, '../data/users.json');
let users = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));

const recordameMiddleware = (req, res, next)=>{
    next();
    if (req.cookies.recordame != undefined && req.session.usuarioLogueado == undefined) {
        let emailUser = req.cookies.recordame;

        let encontrarUser = users.find(user => 
            user.email ==  emailUser
        )

        req.session.usuarioLogueado = encontrarUser;
    }
}

module.exports = recordameMiddleware