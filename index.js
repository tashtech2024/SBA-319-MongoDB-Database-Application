import express from 'express';
import express from 'dotenv';
// import userRouter from './'

//* Init - dotenv package ===//
dotenv.config();

//* App Port ===//
const PORT = process.env.PORT || 5000;

//* Express App ===//
const app = express();

//? MiddleWares ============================//


app.listen(PORT, () =>{
    console.log(`Server is running on port correctly ${PORT}`);
})