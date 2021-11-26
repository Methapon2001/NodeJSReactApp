import * as React from "react";
import { Routes, Route } from "react-router-dom";
import './styles/App.css';
import './styles/Nav.css';
import './styles/Facebook.css';

import Home from './pages/Home';

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>React with NodeJS</h1>
      
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
