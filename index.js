import express from "express"
import dotenv from 'dotenv';
import userRouter from './routes/users.js'
import commentsRouter from './routes/comments.js'
import productRouter from './routes/products.js';

//* Init - dotenv package ===//
dotenv.config();

//* App Port ===//
const PORT = process.env.PORT || 4000;

//* Express App ===//
const app = express();

//? MiddleWares ============================//
//* JSON Parser 
app.use(express.json());
app.use((req, res, next) => {
    console.log("request from URL" + req.url);
    next();
});


//? Routes =========///

//* Users 
app.get('/', (req, res) => {
    console.log(req.body);
    res.send('Users');
});
app.use('/users', userRouter);

//* Comments
app.get('/', (req, res) => {
    console.log(req.body);
    res.send('Comments');
});
app.use('/comment', commentsRouter);

//* Products
app.get('/', (req, res) => {
    console.log(req.body);
    res.send('products');
});
app.use('/products', productRouter);

//? Middleware Fuction == Global error handler middleware
app.use((error, req, res, next) => {
    res.status(500).send('Sever Error!')
});

//? PORT LISTENER ========///
app.listen(PORT, () => {
    console.log(`Server is running on port correctly ${PORT}`);
})