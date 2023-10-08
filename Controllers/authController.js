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
const { c } = require("tar");
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
const sendresetpasswordmail  = async (userName,email,token , userId)=>{
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
  to: "pursuit234@gmail.com",
  subject: "Reset Password",
  text: "<p> Hi "+ userName +",</p><p>You requested for password reset, kindly use this <a href='http://localhost:3000/reset-password/"+userId+token+"'>link</a> to reset your password</p><p>Cheers!</p>'"
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
     const  userdate = userModel.findOne({email:email})
      if(userdate){
      const token = jwt.sign({email:email},process.env.JWT_SECRET,{expiresIn:"1h"});
      console.log(token)
      const update = await userModel.updateOne({email:email},{
        resetPasswordToken:token,
        resetPasswordExpire:Date.now()+3600000,

      })
      if(update){
        sendresetpasswordmail(userdate.userName,userdate.email,token,userdate._id);
        res.status(200).send({
          success : true ,
          message : "Email sent successfully"
        })
      }
    }else{
      res.status(200).send({
        success : false ,
        message : "user not found"
      })
    }
  } catch{
    res.status(200).send({
      success: false,
      message: "Error in forgot password",
      message:error.message,
    });
  }
}
//reset password controller
const resetPasswordController = async(req,res)=>{
 
}

module.exports={loginController , registerController , forgotPasswordController ,resetPasswordController };
