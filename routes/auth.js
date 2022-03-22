const express = require('express');
const router = express.Router();
const {login} = require('../contollers/loginController');


router.route('/login').get(login);


module.exports = router;