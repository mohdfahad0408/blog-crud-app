import express from "express"
import blogRouter from "./routes/blog.route.js";
import cors from "cors"


const app=express();

app.use(cors())

app.use(express.json());

app.use("/api/blogs",blogRouter)

export default app