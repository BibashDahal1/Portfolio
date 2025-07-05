import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage.jsx";
import About from "./About.jsx";
import Service from "./Services.jsx";
import Contact from "./Contact.jsx";
import Projects from "./Projects.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
