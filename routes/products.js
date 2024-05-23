import express from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";

const router = express.Router();

//Get Product 

router.get("/:", async (req, res) => {
    let collection = await db.collection("products");
    const query = { _id: ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
  });

  //add product 
  router.post("/", async (req, res) => {
    let collection = await db.collection("products");
    let newDocument = req.body;
    newDocument.date = new Date();
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  });
  

    export default router