import {MongoClient } from "mongodb";
import dotenv from 'dotenv'; 
dotenv.config();
const client = new MongoClient(process.env.ATLAS_URI) || "dd";

let conn; 

try{
    conn = await client.connect();
    console.log('Connection successful');
} catch(e){
    console.log(e);
}

const db = conn.db('sample_training');

export default db;