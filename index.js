import express from "express"
import dotenv from 'dotenv';
import userRouter from './routes/users.js';

//* Init - dotenv package ===//
dotenv.config();

//* App Port ===//
const PORT = process.env.PORT || 4000;

//* Express App ===//
const app = express();

//? MiddleWares ============================//
app.use(express.json());
//? Middleware Fuction == Global error handler middleware
app.use((req, res, next ) =>{
    console.log("Request from URL:" +req.url);
next()
});
//? Routes =========///

app.use('/users', userRouter)

app.post('')

//? PORT LISTENER ========///
app.listen(PORT, () =>{
    console.log(`Server is running on port correctly ${PORT}`);
})