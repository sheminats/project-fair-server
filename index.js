

//Loads .env file contents into process.env 
require('dotenv').config()

const express = require("express")
const cors = require("cors")
const router=require('./Routes/router')
require('./DB/connection')


//to create express server
const pfServer=express()


//use corse in server
pfServer.use(cors())

//use json parser---------application specific middleware
pfServer.use(express.json())

//available file / folder from server to other app
pfServer.use('/uploads',express.static('./uploads'))


//use router
pfServer.use(router)

const PORT=3000 ||process.env.PORT

//to host created server(pfServer)
pfServer.listen(PORT,()=>{
    console.log(`Project Fair Server Started at PORT:${PORT}`);
})


//to resolve get http request to http://localhost:3000/
pfServer.get('/',(req,res)=>{
res.send("<h1 style=color:red;>Project Fair Server Started...And waiting for client request</h1>")
})

