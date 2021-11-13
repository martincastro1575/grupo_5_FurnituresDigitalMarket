const express = require('express');
const router = express.Router()

const usersApiController = require('../../controllers/api/usersApiController');


router.get('/users', usersApiController.list)
router.get('/users/:id', usersApiController.searchById)



module.exports = router