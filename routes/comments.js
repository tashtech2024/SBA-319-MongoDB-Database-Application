import express, { Router } from "express"
const router = express.Router()
import comments from "../data/comments.js"

router
    .route("/")
    .get((req, res) => {
        res.json(comments)
    })

    .post((req, res) => {
        if (req.body.content && req.body.userId){
            const comment ={
        id: comments[comments.length -1],
        userId: req.body.userId,
        postId: req.body.postId,
        content: req.body.content
    }
    comments.push(comments)
    res.json(comments[comments.length -1])
        }
    })
    export default router