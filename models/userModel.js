const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'Please enter your name'],
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        trim: true
    }
});

const userModel = mongoose.model('user', userSchema);

module.exports ={userModel};