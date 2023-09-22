const express = require("express");
const router  = express.Router() ;
const asyncHandler = require("express-async-handler")
const {userModel
       ,validateRegisterUser
       ,validateLoginUser} = require('../models/userModel');
       const JWT = require("jsonwebtoken");

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
      //validation
      if (!userName || !password) {
        return res.status(404).send({
          success: false,
          message: "Invalid userName or password",
        });
      }
      //check user
      const user = await userModel.findOne({ userName });
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "Email is not registerd",
        });
      }
      if (user.password !== password) {
        return res.status(200).send({
          success: false,
          message: "Invalid Password",
        });
      }
    
      res.status(200).send({
        success: true,
        message: "login successfully",
        user: {
         userName: user.userName,
          password: user.password
        }
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in login",
        error,
      });
    }
  };

module.exports={loginController , registerController};
