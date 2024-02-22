import express, { json } from "express";
import { PORT,MongoURL} from "./config.js";
import mongoose from 'mongoose'
import { Bookmodel } from "./models/bookmodel.js";
const app=express()
app.use(express.json())

app.get('/',(req,res)=>{
    res.send(`<h1>helloMan</h1>`).status(202)
})

app.post('/books',async(req,res)=>{
    try{
        if(!req.body.title||
            !req.body.author||
            !req.body.publishYear ){
                return res.send({message:"send all required field"}).status(500)
        }
        const newBook={
            title:req.body.title,
            author:req.body.author,
            publishYear:req.body.publishYear
        }
        const Book=await Bookmodel.create(newBook)
        return res.send(Book).status(204)
    }
    catch(err){
        console.log(err);
        res.send({message:err.message}).status(500)
    }
})
//GET all Books
app.get('/books',async(req,res)=>{
    try{
        const getBooks=await Bookmodel.find({})
        return res.status(200).json(getBooks)
    }
    catch(err){
        res.send({message:err.message}).status(500)
    }
})
//Get the Books by Id
app.get('/books/:id',async(req,res)=>{
try{
    const {id}=req.params
    const getBooksById=await Bookmodel.findById(id)
    return res.status(200).json(getBooksById) 
}
catch(err){
    res.status(500).send({message:err.message})
}
})
//Update or Edit the Books By put

app.put('/books/:id',async(req,res)=>{
    try{
        if(!req.body.title||
            !req.body.author||
            !req.body.publishYear ){
                return res.send({message:"send all required field"}).status(500)
        }
        const {id}=req.params;
        const EditBook=await Bookmodel.findByIdAndUpdate(id,req.body)
        if(!EditBook){
            return res.send({message:"Book not found"}).status(500)

        }
        return res.send("Successfully Book Updated").status(200)

    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})

mongoose.connect(MongoURL).then(()=>{
    console.log("MongoDB connected")
    app.listen(PORT,()=>{
        console.log(`Port is running ${PORT}`);
    })
})
.catch((err)=>console.log(err))