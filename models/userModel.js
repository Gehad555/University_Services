const joi = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please enter your email"],
      trim: true,
      minlength: 5,
      maxlength: 100,
      unique: true,
    },
    userName: {
      type: String,
      required: [true, "Please enter your name"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      trim: true,
      minlength: 6,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    answer: {
      type: String,
      required: true,
      trim: true,
    },
    resetLink: {
      type: String,
      default: '',
    },
    token:{
      type:String,
      
      default:'',
    }
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);

function validateRegisterUser(obj) {
  const schema = joi.object({
    email: joi.string().trim().min(5).max(100).required().email(),
    userName: joi.string().trim().min(5).max(100).required(),
    password: joi.string().trim().min(6).required(),
    isAdmin: joi.bool(),
    answer: joi.string().trim().min(5).max(100).required(),
  });
  return schema.validate(obj);
}

function validateLoginUser(obj) {
  const schema = joi.object({
    userName: joi.string().trim().min(5).max(100).required(),
    password: joi.string().trim().min(6).required(),
  });
  return schema.validate(obj);
}
module.exports = {
  userModel,
  validateRegisterUser,
  validateLoginUser,
};
