require('dotenv').config();
//require('./Config/db')
const express = require('express');
const dotenv = require('dotenv');
const authRouter = require('./routes/authRoute');
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;


dotenv.config();

const app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
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
    res.send('Hello World !')
})