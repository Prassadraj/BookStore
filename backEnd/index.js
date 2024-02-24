import express, { json } from "express";
import { PORT,MongoURL} from "./config.js";
import mongoose from 'mongoose'
import bookRouter from './routes/bookRouter.js'
import cors from 'cors'
import { Bookmodel } from "./models/bookmodel.js";

const app=express()
//middleWare for getting data from body and to modify
app.use(express.json())
//mIddleware for handling CORS policy
app.use(cors())
// app.use(cors({
//     origin:"http://localhost:3000/",
//     methods:['GET','POST','PUT','DELTE'],
//     allowedHeaders:['Content-Type']
// }))

app.get('/',(req,res)=>{
    res.send(`<h1>helloMan</h1>`).status(202)
    console.log(req);
})
app.use('/books',bookRouter)



mongoose.connect(MongoURL).then(()=>{
    console.log("MongoDB connected")
    app.listen(PORT,()=>{
        console.log(`Port is running ${PORT}`);
    })
})
.catch((err)=>console.log(err))