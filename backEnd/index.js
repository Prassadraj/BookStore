import express, { json } from "express";
import { PORT,MongoURL} from "./config.js";
import mongoose from 'mongoose'
import bookRouter from './routes/bookRouter.js'
import cors from 'cors'
// import { Bookmodel } from "./models/bookmodel.js";

const app=express()
//middleWare for getting data from body and to modify
app.use(express.json())
//mIddleware for handling CORS policy
app.use(cors())
app.options('*',cors())

app.get('/',(req,res)=>{
    res.send(`<h1>helloMan</h1>`).status(202)
    console.log(req);
})
app.use('/books',bookRouter)



mongoose.connect(MongoURL).then(()=>{
    console.log("MongoDB connected")
    app.listen(PORT||5000,()=>{
        console.log(`Port is running ${PORT}`);
    })
})
.catch((err)=>console.log(err))