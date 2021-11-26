import * as React from "react";
import { Routes, Route } from "react-router-dom";
import './styles/App.css';
import './styles/Nav.css';

import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>React with NodeJS</h1>
      
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
