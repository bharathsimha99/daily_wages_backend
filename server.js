const express = require('express')
const {mongoose}  = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const jobModelData = require('./Model/jobPostModel')


const server = express()

server.use(express.json())
dotenv.config()
server.use(cors())


//DataBase connection
const DB_URL = process.env.DB_URL
mongoose.connect(DB_URL).then((db,err) => {
    if (err) throw err
    else{
        console.log("DB is connected")
    }
})


//jobpost Routes
//post api
server.post('/addJob',async(req,res)=>{
    try{
 await jobModelData.create(req.body)
return res.status(200).json({message:"job post is added"})

    }catch(err){
        return res.status(500).json({err:err.message})
    }
})

//patch api

server.patch('/updateJob/:id',async(req,res)=>{
    try{
        await jobModelData.findByIdAndUpdate(req.params.id,req.body)
        return res.status(200).json({message:"job is updated"})

    }catch(err){
        return res.status(404).json({err:err.message})
    }
})

//delete api

server.delete('/:id',async(req,res)=>{
    try{
await jobModelData.findByIdAndDelete(req.params.id)
return res.status(200).json({message:"job post is deleted"})
    }catch(err){
        return res.status(500).json({err:err.message})
    }
})
//get api
server.get('/jobData',async(req,res)=>{
    try{
const allPosts = await jobModelData.find({})
return res.status(200).json({message:"ALL DATA",allPosts})
    }catch(err){
        return res.status(500).json({err:err.message})
    }
})

//PORT no
server.listen(5000,()=>{
    console.log("server is runing PORT 5000")
})