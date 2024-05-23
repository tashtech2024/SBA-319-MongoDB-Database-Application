import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config();

const client = new MongoClient(process.env.ATLAS_URI) || "";


let conn; 

try{
    conn = await client.connect();
} catch(e){
    console.log(e);
}

const db = conn.db('SBA319');

export default db;