
const express = require('express')
const router = express.Router();
const asyncHandler = require("express-async-handler")
const {createCategory
      
        } = require('../Controllers/categoryController');

//Create category
router.post('/createCategory' ,  createCategory);


module.exports = router ;