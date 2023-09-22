const express = require("express");
const router  = express.Router() ;
const asyncHandler = require("express-async-handler")
const {userModel
       ,validateRegisterUser
       ,validateLoginUser} = require('../models/userModel');

//register controller
const registerController = asyncHandler(async(req,res)=>{
    const { error }  = validateRegisterUser(req.body); 
    if(error){
        return res.status(400).json({message: error.details[0].message});
    }
    let user = await userModel.findOne({email : req.body.email});
    if(user){
        return res.status(400).json({message : "this user already registered"})
    }

    user = new userModel({
        email : req.body.email ,
        userName : req.body.userName ,
        password : req.body.password,
        isAdmin : req.body.isAdmin,
    });

   const result  =  await user.save();
   res.status(201).json(result);
});

// login controller
const loginController = async (req, res) => {
    try {
        const { userName, password } = req.body;
        if(!userName || !password) {
            return res.status(400).json({ msg: 'Please enter all fields' });   
        }
        // check User
        const user = await userModel.findOne({ userName });
        if(!user) {
            return res.status(400).json({ msg: 'User does not exist' });
        }
    
    }
    catch(err) {
        return res.status(500).json({ msg: err.message });
    }
};

module.exports={loginController , registerController};
