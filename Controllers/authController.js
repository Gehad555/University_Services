const express = require("express");
const router  = express.Router() ;
const userModel = require('../Models/userModel');

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

module.exports={loginController};
