import React, { useState } from 'react'
import { useContext,useEffect } from 'react'
import { BlogContext } from './context/BlogContext'
import BlogFrom from './components/BlogFrom'
import BlogList from './components/BlogList'

const App = () => {

  const {blogs,getBlog}=useContext(BlogContext);
  const [editBlog, setEditBlog] = useState()

  useEffect(() => { getBlog()}, [])
  
  

  return (
     <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-6xl px-6 py-5">
          <h1 className="text-2xl font-bold text-gray-900">
            Blog CRUD
          </h1>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">

        <BlogFrom editBlog={editBlog} setEditBlog={setEditBlog} />
        <BlogList setEditBlog={setEditBlog} />
        
      </main>
    </div>
  )
}

export default App