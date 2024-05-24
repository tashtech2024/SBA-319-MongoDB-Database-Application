import express from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";

const router = express.Router();


router.get("/products"), (req, res) => {
  res.send('Get All products');
};

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

    newDocument.date = new Date();
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  });

  //GET, Patch , Delete
  router.route(":/id")
.get ((req, res, next) =>{
    const product = products.find((u) => u.id == req.params.id)
    if (product) res.json(product)
        else next ()
})
.patch((req, res, next)=>{
    const product = products.find((u, i) =>{
        if (u.id == req.params.id){
            for (const key in req.body) {
                product[i][key] = req.body[key]
            }
            return true
        }
    })
    if (product) res.json(product)
    else next()
})
.delete((req, res, next) =>{
    const product = products.find((u, i) =>{
        if (u.id == req.params.id){
            product.splice(i, 1)
            return true
        }
    })
    if (product) res.json(product)
    else next()
});
  

    export default router