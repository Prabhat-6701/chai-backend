//require('dotenv').config({path: './env'})
import dotenv from "dotenv"
//import mongoose, { connect } from 'mongoose';
//import { DB_NAME } from './constants';
//import express from 'express';
//const app = express()
import connectDB from './db/index.js';

dotenv.config({
    path : './env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log('Server is running on port :${process.env.PORT} ');
    })
})
.catch((err) =>{
    console.log("MONGO db connection failed!!", err)
})






/*(async () =>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`,)
       app.on("error",(error)=> {
        console.log("Error", error);
        throw error;
       })

       app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
       })
    } catch(error){
        console.error('Error:', error);
        throw error;
    }
}) ()
    */