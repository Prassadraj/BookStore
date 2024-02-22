import mongoose from "mongoose";
const Schema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    publishYear:{
        type:Number,
        required:true
    }},
    {
        timeStamp:true
    })

export const Bookmodel = mongoose.model('Book',Schema);