import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage.jsx';

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* Add more routes here as needed */}
      </Routes>
    </>
  )
}

export default App
