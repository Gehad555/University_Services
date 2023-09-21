require('./Config/db')
const express = require('express');
const dotenv = require('dotenv');
const app = express();
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

const authRouter = require('./routes/authRoute');
dotenv.config();

app.use(express.json());
app.use('/api/v1/auth', authRouter);

app.get('/',(req,res)=>{
    res.send('Hello World !')
})



app.listen(port,()=>{
    console.log(`University app listening at http://localhost:${port}`);
})

