const express = require('express');
const router = express.Router()

const usersApiController = require('../../controllers/api/usersApiController');


router.get('/users', usersApiController.list)
router.get('/users/:id', usersApiController.searchById)
router.get('/users/detail/:id', usersApiController.detailUser)



module.exports = router