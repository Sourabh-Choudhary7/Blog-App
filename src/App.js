
import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Create from './components/Create';
import BlogDetail from './components/BlogDetail';

function App() {
  const [data,setData] = useState("")
  const [isAuthenticated,setIsAuthenticated] = useState(false)
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar data={data} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home data={data} changeHandler={setData} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path='/blog/:id' element={<BlogDetail/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
