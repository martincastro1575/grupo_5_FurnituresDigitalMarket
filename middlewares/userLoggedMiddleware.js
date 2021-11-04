const User = require('../models/Users')


const userLoggedMiddleware = async (req, res, next)=>{
    
    res.locals.isUserlogged = false;
    
    let emailCookie = req.cookies.userEmail || ''
    console.log('cookie', req.cookies)
    let userFromCookie = await User.findByField(emailCookie)

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