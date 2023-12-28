import React from "react";
import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "../useFetch";

function Home(props) {
  const [name, setName] = useState("Ram");
  const handleClick = () => {
    // name="Sourabh";
    props.changeHandler("Sourabh");
    setName("Sourabh");
    // console.log(name);
  };
  // const handleName =(name,e) => {
  //   // console.log("hello "+name, e.target)
  // }

  // const [blogs, setBlogs] = useState(null);
  // const [isPending, setIsPending] = useState(true); when promise function called
  // const [isPending, setIsPending] = useState(false);
const {blogs, isPending} = useFetch('http://localhost:8000/blogs')

  
  // console.log(id);
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);

  //   setBlogs(newBlogs);
  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      <BlogList
        blogs={blogs}
        heading={"My All Blogs..."}
      />
      {/* <BlogList blogs={blogs.filter((blog)=> blog.author === 'mario')} heading={"Mario Blogs..."} handleDelete={handleDelete}/> */}
      <button className="btn" onClick={handleClick}>
        change name
      </button>

      <h1>
        {props.isAuthenticated
          ? "Hello," + name + " welcome to the app"
          : "Please sign in"}
      </h1>
      {props.isAuthenticated && (
        <button onClick={() => props.setIsAuthenticated(false)}>log out</button>
      )}
    </div>
  );
}

export default Home;
