const express = require("express");
const router  = express.Router() ;
const slugify = require("slugify");
const asyncHandler = require("express-async-handler")
const {categoryModel  ,
        validateCreateCategory}    = require("../models/categoryModel") ;
const e = require("express");



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

// update category
const updateCategory = async (req, res) => {
    try{
        const { name } = req.body;
        const {id} = req.params;

        if (!name) return res.status(400).json({ message: "Name is required" });
        const category = await categoryModel.findByIdAndUpdate(
            id,
            { name, slug: slugify(name) },
            { new: true }
          );
          res.status(200).send({
            success: true,
            messsage: "Category Updated Successfully",
            category,
          });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Something went wrong in category updation"
        })
    }
};
  // delete category
  const deleteCategoryCOntroller = async (req, res) => {
    try {
      const { id } = req.params;
      await categoryModel.findByIdAndDelete(id);
      res.status(200).send({
        success: true,
        message: "Categry Deleted Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "error while deleting category",
        error,
      });
    }
  };

     // get all categories
     const categoryControlller = async (req, res) => {
        try {
          const category = await categoryModel.find({});
          res.status(200).send({
            success: true,
            message: "All Categories List",
            category,
          });
        } catch (error) {
          console.log(error);
          res.status(500).send({
            success: false,
            error,
            message: "Error while getting all categories",
          });
        }
      };
         // single category
 const singleCategoryController = async (req, res) => {
    try {
      const category = await categoryModel.findOne({ slug: req.params.slug });
      res.status(200).send({
        success: true,
        message: "Get SIngle Category SUccessfully",
        category,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error While getting Single Category",
      });
    }
  };

  exports.createCategory = createCategory;
  exports.updateCategory = updateCategory;
  exports.deleteCategoryCOntroller = deleteCategoryCOntroller;
  exports.categoryControlller = categoryControlller;
  exports.singleCategoryController = singleCategoryController;
 