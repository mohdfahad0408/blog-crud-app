import { Blog } from "../models/Blog.model.js";

const createBlog=async (req,res)=>{
    const {title,content,status,author}=req.body;

    const blog=await Blog.create({
        title, content,author,status
    })

    res.status(201).json({
        success: true,
        message: "Blog created successfully",
        blog
    })
}

const getBlog=async(req,res)=>{
    const blog=await Blog.find();

    res.status(200).json({
        success: true,
        blog
    })
}

const getBlogById=async (req,res)=>{
    const blog=await Blog.findById(req.params.id)

    res.status(200).json({
        success: true,
        blog
    })
}

const updateBlog=async(req,res)=>{
    const blog= await Blog.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );

    res.status(200).json({
        success: true,
        message: "Blog updated successfully",
        blog
    });
}

const deleteBlog=async(req,res)=>{
    const blog=await Blog.findByIdAndDelete(req.params.id);

    res.status(200).json({
        success: true,
        message: "Blog deleted successfully"
    });
}

export {createBlog,getBlog,getBlogById,updateBlog,deleteBlog};