import express, { Router } from "express"
const router = express.Router()
import products from "../routes/products.js"

router
    .route("/")
    .get((req, res) => {
        res.json(products)
    })

    .post((req, res) => {
        if (req.body.content && req.body.userId){
            const comment ={
        id: products[products.length -1],
        userId: req.body.userId,
        postId: req.body.postId,
        content: req.body.content
    }
    products.push(products)
    res.json(products[products.length -1])
        }
    })
    export default router