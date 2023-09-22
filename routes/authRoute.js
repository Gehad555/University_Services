
const express = require('express')
const router = express.Router();
const asyncHandler = require("express-async-handler")
const { loginController , 
        registerController 
        } = require('../Controllers/authController');

//register router
router.post('/register' , registerController);
// login router
router.post('/login', loginController);


module.exports = router ;