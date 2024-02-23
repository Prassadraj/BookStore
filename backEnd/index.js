import express, { json } from "express";
import { PORT,MongoURL} from "./config.js";
import mongoose from 'mongoose'
import bookRouter from './routes/bookRouter.js'

const app=express()
//middleWare for getting data from body and to modify
app.use(express.json())

app.get('/',(req,res)=>{
    res.send(`<h1>helloMan</h1>`).status(202)
})
app.use('/books',bookRouter)



mongoose.connect(MongoURL).then(()=>{
    console.log("MongoDB connected")
    app.listen(PORT,()=>{
        console.log(`Port is running ${PORT}`);
    })
})
.catch((err)=>console.log(err))