import express, { query } from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";

const router = express.Router();

// ======= User document minimum requirements ====== //
/**
 * {
 *  "email": "test@test.com",
 *  "password": "password123",
 *  "username": "testuser1"
 * } 
 */

// ============== CRUD ====================== //
/**
 * Create a new user
 * POST /users/
 */
router.get("/"), (req, res) => {
    res.send('Hello from User Router')
};
//? Post Users - POST IS for URL/HTTPS not "post"
router.post('/', async (req, res) => {
    const collection = await db.collection("users");
    const newDocument = req.body;

    const result = await collection.insertOne(newDocument);
    res.send(result).status(204);
});

/**
 * Get all users
 * GET /users/
 */

router.get("/", (req, res) => {
    res.send("Get All users");
});

//! LINE 48 NUMBER AND NOT NEW object ====///
/**
 * Get a single user by the id
 * GET /users/:id
*/
router.get("/:users", async (req, res) => {
    const collection = await db.collection("users");
    const query = { _users: Number(req.params.users) };
    const result = await collection.findOne(query);

    if (!result) res.send("Not Found").status(404);
    else res.send(result).status(200);
});


/**
 * Update an user by the id
 * PUT /users/:id 
 * (try the PUT method this time)
*/

router.put("/", async (res, req) =>{
const collection = await db.collection("users");
const query = { learner_id: new ObjectId(req.params.id)};
const result = await collection.replaceOne(query);

if (!result) res.send("Not Found").status(404);
else res.send(result).status(200);
});


/**
 * Delete an user by the id
 * DELETE /users/:id
 */
router.delete("/learner/:id", async (req, res) => {
    let collection = await db.collection("grades");
    let query = { student_id: Number(req.parmas.id)}; 

    let result = await collection.deleteMany(query);

    if (!result) res.send("Not Found").status(404);
    else res.send(result).status(200);
})

export default router





