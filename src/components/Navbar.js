import React from 'react'
// import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  // const [data, setData] = useState("Home")
  return (
    <nav className='navbar'>
    <h1>The Blog App</h1>
    <div className='links'>
        {/* <a href='/'>{data}</a> */}
        <Link to='/'>{props.data ? props.data : "Home"}</Link>
        <Link to='/create'>Add New Blog</Link>
        {/* <a href='/'}}>{props.isAuthenticated ? props.data : "Sign-in"}</a> */}
        <button className='btn' onClick={() => {
         props.isAuthenticated ? props.setIsAuthenticated(false) : props.setIsAuthenticated(true)
        }}>{props.isAuthenticated ? props.data : "Sign-in"}</button>
    </div>
    </nav>
  )
}

export default Navbar
