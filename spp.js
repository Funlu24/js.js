/*import express from 'express';
import dotenv from 'dotenv' ;
import conn from './db.js';
import { connect } from 'http2';

dotenv.config();
//connected DB
conn();
*/
const express = require ("express")
const spp = express()
const port = process.env.PORT ||5000; 
require("dotenv").config()
const todoRouter = require("./src/routers/todoRouter")

console.log(process.env.PORT)

spp.use(express.json());  // JSON verilerini okumak için gerekli
spp.use(express.urlencoded({extended: true }));  // URL-encoded verileri okumak için gerekli

spp.use("/api", todoRouter)//hepsinde kullanmamak için yazdık ilk defa todorouterda kullandık.


spp.get("/",(req,res)=>{
    res.send("hoşgeldin.") 
})




spp.listen(port,()=>{
    console.log(`Server ${port} portdan başladı.`);

})