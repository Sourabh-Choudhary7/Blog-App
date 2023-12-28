import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import useFetch from '../useFetch'
export default function BlogDetail() {
    const {id} = useParams()
    const {blogs, isPending} = useFetch('http://localhost:8000/blogs/' + id)
    const navigate = useNavigate()
  const handleDelete = (id) => {
    fetch('http://localhost:8000/blogs/'+ id, {
        method: 'DELETE'
    }).then(()=>{
      console.log("blog deleted")
     navigate('/')
    })
  };
  return (
    <div className='blog-details'>
    {/* This is a blog page, and we are currently seeing the blog number {id} */}
    {/* <p>{blogs.body}</p> */}
    {isPending && <div>Loading...</div>}
    {blogs && <article>
      <h2>{blogs.title}</h2>
      <i> Written by {blogs.author}</i> 
      <p>{blogs.body}</p>
      <button className='btn-delete' onClick={() => handleDelete(blogs.id)}>Delete</button>
    </article>}
    </div>
  )
}
