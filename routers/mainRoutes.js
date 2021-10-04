const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController')

router.get('/', mainController.home);

// ejemplo de uso de parametros compartidos
//router.get('/userList', mainController.list);
router.get('/list', mainController.list);

module.exports = router;
