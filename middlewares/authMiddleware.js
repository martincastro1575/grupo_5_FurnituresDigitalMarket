const authMiddleware = (req, res, next)=>{
    if (!req.session.userLogin) {
        return res.redirect('/user/login')
        
    }else{
        next();
    }
}

module.exports = authMiddleware;