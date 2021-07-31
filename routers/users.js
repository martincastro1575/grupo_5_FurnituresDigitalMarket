const express = require('express');
const routerUser = express.Router();

const userController = require('../controllers/usersControllers');
// const router = require('./products');

routerUser.get('/login', userController.userLogin)

module.exports = routerUser