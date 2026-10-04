import dotenv from "dotenv";

import connectDB from "./db/index.js";

import app from "./app.js";

dotenv.config();


connectDB();

app.listen(process.env.PORT, () => {
    console.log("Server is running on port " + process.env.PORT);

})

app.use("/", (req, res) => {
    res.send("<h1>server is running</h1>")
})




/*
import express from "express"
const app=express();
;(async ()=>{
    try{
        await mongoose.connect(`{process.env.MONGODO_URI}/${DB_NAME}`)

        app.on("error",(error)=>{
            console.error("ERROR : ",error);
            throw error;
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
            
        })
    }
    catch(error){
        console.error("ERROR : ",error);
        throw error;
    }
})()

*/
