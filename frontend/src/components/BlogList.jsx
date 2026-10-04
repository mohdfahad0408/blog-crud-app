import React, { useContext } from 'react'
import { BlogContext } from '../context/BlogContext'

const BlogList = ({setEditBlog}) => {

    const {blogs,deleteBlog}=useContext(BlogContext)
  return (
    <section className="mt-8">
      <h2 className="mb-4 text-xl font-bold text-gray-900">
        All Blogs
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="rounded-xl bg-white p-6 shadow-sm"
          >
            <h3 className="mb-2 text-xl font-bold text-gray-900">
              {blog.title}
            </h3>

            <p className="mb-3 text-gray-600">
              {blog.content}
            </p>

            <p className="text-sm text-gray-500">
              By {blog.author}
            </p>
            <button  
            onClick={()=>setEditBlog(blog)}
            className="mt-4 rounded-lg bg-yellow-500 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600">
                Edit
                </button>

                <button
                    onClick={() => deleteBlog(blog._id)}
                    className="mt-2 mx-5 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
                >
                Delete
                </button>


                <span className={` ${blog.status=="Post"?"bg-green-400":"bg-gray-100"} mt-3 mx-5 inline-block rounded-full  px-3 py-1 text-sm`}>
              {blog.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BlogList