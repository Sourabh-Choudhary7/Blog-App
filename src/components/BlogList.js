import React from 'react'
import { Link } from 'react-router-dom'
function BlogList({blogs, heading}) {
  
  
  return (
    <div className='blog-list'>
    <h2>{heading}</h2>
        {blogs?.map((blog)=>{
         return <div className = 'blog-preview' key={ blog.id }>
          <Link to={`/blog/${blog.id}`}>
          <h2>{ blog.title }</h2>
          <p>written by { blog.author }</p>
          </Link>
          
          </div>
        })}
    </div>
  )
}

export default BlogList