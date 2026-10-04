import mongoose from "mongoose";

const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["Post","Draft"],
        default:"Draft"
    }
},{timestamps:true})


export const Blog=mongoose.model("Blog",blogSchema)