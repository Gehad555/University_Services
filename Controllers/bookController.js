const express = require("express");
const router  = express.Router() ;
const asyncHandler = require("express-async-handler")
const {bookModel  ,
        validateCreateBook}    = require("../models/bookModel") ;
const categoryModel = require("../models/categoryModel") ;


const createBook = async (req, res) => {

  const { error }  = validateCreateBook(req.body); 
  if(error){
      return res.status(400).json({message: error.details[0].message});
  }
  let book = await bookModel.findOne({name : req.body.name});
  if(book){
      return res.status(400).json({message : "this book already registered"})
  }

  book = new bookModel({
      name : req.body.name ,
      description : req.body.description ,
      price : req.body.price,
      section : req.body.section,
  });

 const result  =  await book.save();
 res.status(201).json(result);
 
};


  exports.createBook = createBook;
 