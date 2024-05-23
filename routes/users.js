import express from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";

const router = express.Router();

//GET
router.get("/"), (req, res) => {
    res.send('Hello from User Router');
};

//GET user by _ID 
router.get('/:id', async (req, res) => {
    const collection = await db.collection('users');
    const query = { _id: new ObjectId(req.params.id) };
    const result = await collection.findOne(query);

    if (!result) res.send('Not Found').status(404);
    else res.send(result).status(200);

});
// GET user by user_ID
router.get('/userId/:id', async (req, res) => {
    const collection = await db.collection("users");
    const query = { shopperId: Number(req.params.id) };
    const result = await collection.find(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

//Post user
  router.post("/", async (req, res) => {
    const collection = await db.collection("users");
    const newDocument = req.body;

    const result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  });

//PATCH / Delete 
router.route(":/id")
.get ((req, res, next) =>{
    const user = users.find((u) => u.id == req.params.id)
    if (user) res.json(user)
        else next ()
})
.patch((req, res, next)=>{
    const user = users.find((u, i) =>{
        if (u.id == req.params.id){
            for (const key in req.body) {
                users[i][key] = req.body[key]
            }
            return true
        }
    })
    if (user) res.json(user)
    else next()
})
.delete((req, res, next) =>{
    const user = users.find((u, i) =>{
        if (u.id == req.params.id){
            users.splice(i, 1)
            return true
        }
    })
    if (user) res.json(user)
    else next()
});

export default router




