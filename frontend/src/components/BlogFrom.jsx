import React, { useContext, useEffect, useState } from 'react'
import { BlogContext } from '../context/BlogContext'

const BlogFrom = ({editBlog,setEditBlog}) => {

  const {createBlog, updateBlog}=useContext(BlogContext);
  const [formData, setFormData] = useState({
    title:"",author:"",content:"",status:"Draft"
  })

  useEffect(() => {
    if(editBlog){
      setFormData({
      title:editBlog.title,
      author:editBlog.author,
      content:editBlog.content,
      status:editBlog.status
    })
    }
  }, [editBlog])
  

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value
  })
  }
  
  const handleSubmit=async(e)=>{
  e.preventDefault();
  if(editBlog){
    await updateBlog(editBlog._id,formData);
    setEditBlog(null);
  }else{
    await createBlog(formData);
}

  setFormData({title:"",author:"",content:"",status:"Draft"});
};



  return (
    <form onSubmit={handleSubmit} className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold text-gray-900">
        Create Blog
      </h2>

      <div className="mb-4">
        <label className="mb-2 block font-medium text-gray-700">
          Title
        </label>

        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          type="text"
          placeholder="Enter blog title"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 block font-medium text-gray-700">
          Author
        </label>

        <input
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Enter author name"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 block font-medium text-gray-700">
          Content
        </label>

        <textarea
          name="content"
          required
          value={formData.content}
          onChange={handleChange}
          placeholder="Write your blog..."
          rows="6"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-6">
        <label className="mb-2 block font-medium text-gray-700">
          Status
        </label>

        <select name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500">
          <option value="Draft">Draft</option>
          <option value="Post">Post</option>
        </select>
      </div>

      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
      >
        {editBlog ? "Update Blog" : "Create Blog"}
      </button>
    </form>
  )
}

export default BlogFrom