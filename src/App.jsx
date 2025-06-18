import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage.jsx';
import About from './About.jsx';

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
