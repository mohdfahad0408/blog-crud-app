import { createContext, useState } from "react";
import axios from "axios";

export const BlogContext=createContext();

export const BlogProvider=({children})=>{
    const [blogs, setBlogs] = useState([])

    const getBlog=async()=>{
        const res= await axios.get("http://localhost:8000/api/blogs");
        setBlogs(res.data.blog)
    };

    const createBlog=async(blogData)=>{
        const res=await axios.post("http://localhost:8000/api/blogs",blogData)

        setBlogs(prev=>[res.data.blog,...prev])

        return res.data.blog;
    }
    

    const updateBlog= async(id,blogData)=>{
        const res=await axios.put(`http://localhost:8000/api/blogs/${id}`,blogData);

        setBlogs(prev=> prev.map(blog=>blog._id===id? res.data.blog:blog))

        return res.data.blog

    }

    const deleteBlog=async(id)=>{
        await axios.delete(`http://localhost:8000/api/blogs/${id}`);

        setBlogs(prev=>prev.filter(b=> b._id!==id))

    }

    return (
        <BlogContext.Provider value={{blogs,setBlogs,getBlog,createBlog,deleteBlog,updateBlog}}>
            {children}
        </BlogContext.Provider>
    )

}