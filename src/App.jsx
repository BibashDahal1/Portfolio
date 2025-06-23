import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage.jsx';
import About from './About.jsx';
import Service from './Services.jsx';

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path='/services' element= {<Service />} />
      </Routes>
    </>
  )
}

export default App
