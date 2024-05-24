import express from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";

const router = express.Router();

//GET Comment
router.get('/', async (req, res) => {
const collection = await db.collection('comments');                
const query = {body: new ObjectId(req.params.id)};
const result = await collection.findOne(query);

if(!result) res.send('Not Found').status(404);
else res.send(result).status(200);

});

// GET comment by user_ID
router.get('/userId/:id', async (req, res) => {
    const collection = await db.collection("comments");
    const query = { Comment: String(req.params.id) };
    const result = await collection.find(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

router.post("/", async (req, res) => {
    const collection = await db.collection("comments");
    const newDocument = req.body;
    const result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  });

router.route(":/id")
.get ((req, res, next) =>{
    const comment = Comment.find((u) => u.id == req.params.id)
    if (Comment) res.json(Comment)
        else next ()
})
.patch((req, res, next)=>{
    const comment = Comment.find((u, i) =>{
        if (u.id == req.params.id){
            for (const key in req.body) {
                comment[i][key] = req.body[key]
            }
            return true
        }
    })
    if (comment) res.json(comment)
    else next()
})
.delete((req, res, next) =>{
    const comment = Comment.find((u, i) =>{
        if (u.id == req.params.id){
            comment.splice(i, 1)
            return true
        }
    })
    if (comment) res.json(comment)
    else next()
});


    export default router
