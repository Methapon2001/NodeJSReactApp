import * as React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
      </nav>
    </div>
  );
}

export default Home;
