
const express = require('express')
const router = express.Router();
const asyncHandler = require("express-async-handler")
const { loginController , 
        registerController,
        forgotPasswordController,
        resetPasswordController
        } = require('../Controllers/authController');
const { body } = require('express-validator');


//register router
router.post('/register' , registerController);

// login router
router.post('/login', loginController);

// forgot password router
router.post('/forgotpassword', forgotPasswordController);

// reset password router
router.put('/resetpassword/:resetToken', resetPasswordController);


module.exports = router ;