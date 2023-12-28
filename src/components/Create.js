import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../useFetch";

// API: https://jsonplaceholder.typicode.com/users


function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, author};
    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(blog)
    }).then(() => {
      console.log("New Blog added");
      setIsPending(false)
      navigate('/')
    })
  }
  const {blogs:data} = useFetch('https://jsonplaceholder.typicode.com/users')
  console.log(data);
  

  return (
    <div className="create">
      <h2>Create a Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Tittle: </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body: </label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Blog Author: </label>
        <select
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        >
          {/* <option value="mario">mario</option>
          <option value="yoshi">yoshi</option> */}
          {
            !isPending && data?.map((d)=>{
              return (
                <option key={d.id} value={d.name}>{d.name}</option>
              )
            })
          }
        </select>
        {!isPending && <button className="btn">Add Blog</button>}
        {isPending && <button className="btn" disabled>Adding Blog...</button>}
        {/* <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p> */}
      </form>
    </div>
  );
}


export default Create
