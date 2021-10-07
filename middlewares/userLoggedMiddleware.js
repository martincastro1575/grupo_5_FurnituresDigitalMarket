const User = require('../models/Users')


const userLoggedMiddleware = (req, res, next)=>{
    
    res.locals.isUserlogged = false;
    
    let emailCookie = req.cookies.userEmail
    let userFromCookie = User.findByField('email', emailCookie)

    if (userFromCookie){
        req.session.userLogin = userFromCookie
    }
    

    if (req.session.userLogin) {

        res.locals.isUserlogged = true;
        res.locals.userLogin = req.session.userLogin
        
    }
    
    next();
    

   
}

module.exports = userLoggedMiddleware;