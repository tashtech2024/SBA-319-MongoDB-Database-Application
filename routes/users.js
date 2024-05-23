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
    const query = { _id: new ObjectId(req.params.id)};
    const result = await collection.findOne(query);

    if(!result) res.send('Not Found').status(404);
    else res.send(result).status(200);

});
// GET user by user_ID
router.get('/shopper/:id', async (req, res) => {
    const collection = await db.collection("users");
    const query = { shopperId: Number (req.params.id) };
    const result = await collection.find(query);
  
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
  });


export default router;





