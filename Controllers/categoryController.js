const express = require("express");
const router  = express.Router() ;
const asyncHandler = require("express-async-handler")
const {categoryModel  ,
        validateCreateCategory}    = require("../models/categoryModel") ;



const createCategory = async (req, res) => {

  const { error }  = validateCreateCategory(req.body); 
  if(error){
      return res.status(400).json({message: error.details[0].message});
  }
  let cat = await categoryModel.findOne({name : req.body.name});
  if(cat){
      return res.status(400).json({message : "this category already registered"})
  }

  category = new categoryModel({
      name : req.body.name ,
 
  });

 const result  =  await category.save();
 res.status(201).json(result);
 
};


  exports.createCategory = createCategory;
 