require('./Config/db')
const express = require('express');
const dotenv = require('dotenv');
const authRouter = require('./routes/authRoute');
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;


dotenv.config();

const app = express();
app.use(express.json());
app.use('/api/v1/auth', authRouter);

app.get('/',(req,res)=>{
    res.send('Hello World !')
})



app.listen(port,()=>{
    console.log(`University app listening at http://localhost:${port}`);
})

