const express = require("express");
const router  = express.Router() ;
require('dotenv').config();
 const { comparePassword, hashPassword } = require("../helpers/authHelper");
const jwt = require("jsonwebtoken");

const user = require("../models/userModel");
const asyncHandler = require("express-async-handler")
const maliaGun = require("mailgun-js");
const nodemailer = require("nodemailer");
const randomString = require("randomstring");

const {userModel
       ,validateRegisterUser
       ,validateLoginUser} = require('../models/userModel');
       const JWT = require("jsonwebtoken");
const e = require("express");
const { config } = require("dotenv");
const { c, u } = require("tar");
const { error } = require("npmlog");
const { boolean } = require("joi");

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
        answer : req.body.answer,
    });

   const result  =  await user.save();
   res.status(201).json(result);
});

// login controller
 const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registerd",
      });
    }
     
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET,{
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
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
//send reset password mail
const sendresetpasswordmail  = async (userName,email,token , userId )=>{
  try{
//pasword controller
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});
const mailOptions = {
  from: process.env.EMAIL,
  to: email,
  subject: "Reset Password",
  text: `Hi ${userName} , Please click on the link to reset your password http://localhost:3000/reset-password/${userId}/${token}`,
};
 
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
  } catch{
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in sending mail",
      error,
    });
  }
 }
//forgot password controller
const forgotPasswordController = async(req,res)=>{
  try{
     const email = req.body.email;
     const  userdate = await userModel.findOne({email:email})
      if(!userdate){
        res.status(200).send({
          success: false,
          message: "Email is not registerd",
        });
      }
      const secret = process.env.JWT_SECRET + userdate.password;
      const token = jwt.sign({email:email,id:userdate.id},secret,{expiresIn:"15m"});
      await sendresetpasswordmail(userdate.userName,userdate.email,token,userdate.id);
      res.status(200).send({
        success: true,
        message: "Email sent successfully",
      });
     
  } catch{
    res.status(200).send({
      success: false,
      message:error.message
    });
  }
}
// reset password controller
const getresetPasswordController = async(req,res)=>{
  try{
     const  userdate =  await userModel.findById(req.params.userId)
      if(!userdate){
        res.status(200).send({
          success: false,
          message: "Email is not registerd",
        });
      }
      const secret = process.env.JWT_SECRET + userdate.password;
      jwt.verify(req.params.token,secret,(error,decoded)=>{
        if(error){
          res.status(200).send({
            success: false,
            message: "Error in forgot password",
            message:error.message,
          });
          console.log(error);
        }
        if(decoded){
          res.status(200).send({
            success: true,
            message: "Password reset successfully",
          });
        }
      })

    }
    catch{
      res.status(200).send({
        success: false,
        message: "Error in forgot password",
        message:error.message,
      });
      console.log(error);
    }
}
const postresetPasswordController = async(req,res)=>{
  // to do validation
  const  userdate =  await userModel.findById(req.params.userId)
   if(!userdate){
     res.status(200).send({
       success: false,
       message: "Email is not registerd",
     });
   }
   const secret = process.env.JWT_SECRET + userdate.password;
   try{
     jwt.verify(req.params.token,secret);
     const salt = await bcrypt.genSalt(10);
     req.body.password = await bcrypt.hash(req.body.password,salt);
     userdate.password = req.body.password;
      await userdate.save();
      res.status(200).send({
        success: true,
        message: "Password reset successfully",
      });
   } catch{
     res.status(200).send({
       success: false,
       message: "Error in forgot password",
       message:error.message,
     });
     console.log(error);
   } 
}

module.exports={loginController , registerController , forgotPasswordController ,getresetPasswordController,postresetPasswordController };

