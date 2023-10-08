require('dotenv').config();
const express = require('express');
const dotenv = require('dotenv');
const authRouter = require('./routes/authRoute');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer'); 
const port =  3000|| process.env.PORT || 4000;
dotenv.config();
const app = express();
app.use(express.json());
app.use('/api/v1/auth', authRouter);

// connect to db
mongoose.connect(process.env.MONGO_URI) 
        .then(()=> {
                app.listen(port,()=>{
                                    console.log(`University app listening at http://localhost:${port}`);
                                    })
        })
        .catch((error) => {
            console.log(error)
        })
          
app.get('/',(req,res)=>{
    res.send('Gehad Shalaby')
})