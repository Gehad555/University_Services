const joi = require("joi");
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, "Please enter Book name "],
        trim: true,
        minlength: 3,
        maxlength: 100,
        unique: true,
      },
      description: {
        type: String,
        required: [true, "Please enter description"],
        trim: true,
      },
      price: {
        type: Number,
        required: [true, "Please enter price"],
      },
      section: {
        type: String,
      
        required: true,
      },


    },
    { timestamps: true }
  );
const bookModel = mongoose.model("book", bookSchema);  

function validateCreateBook(obj) {
  const schema = joi.object({
   name : joi.string().trim().min(5).max(100).required(),
   description: joi.string().trim().min(5).max(100).required(),
   price: joi.number().precision(2).required() ,
   section: joi.string().trim().min(2).max(100).required(),
  });
  return schema.validate(obj);
}

module.exports = {
    bookModel,
    validateCreateBook
};
    