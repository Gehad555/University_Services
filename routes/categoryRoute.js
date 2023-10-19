
const express = require('express')
const router = express.Router();
const asyncHandler = require("express-async-handler")
const {createCategory,updateCategory,deleteCategoryCOntroller,
        categoryControlller , singleCategoryController 
      
        } = require('../Controllers/categoryController');

//Create category
router.post('/createCategory' ,  createCategory);
//Update category
router.put('/updateCategory/:id' ,  updateCategory);
//Delete category
router.delete('/deleteCategory/:id' ,  deleteCategoryCOntroller);
//Get all categories
router.get('/all' , categoryControlller);
//Get single category
router.get('/:slug' , singleCategoryController);

module.exports = router ;