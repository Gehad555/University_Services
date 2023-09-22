
const express = require('express')
const router = express.Router();
const asyncHandler = require("express-async-handler")
const { loginController , 
        registerController ,forgotPasswordController
        } = require('../Controllers/authController');

//register router
router.post('/register' , registerController);

// login router
router.post('/login', loginController);

//Forgot Password 
router.post("/forgot-password", forgotPasswordController);


module.exports = router ;