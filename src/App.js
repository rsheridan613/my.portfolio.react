import React from "react";
import { Hashrouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <Router basename="/">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
