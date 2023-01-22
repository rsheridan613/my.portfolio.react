import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <header className="header container">
        <h1>Ryan Sheridan</h1>
        <ul className="links container">
          <li className="nav-bar" href="#about">
            <Link to="/">About Me</Link>
          </li>
          <li className="nav-bar" href="#projects">
            <Link to="/projects">My Projects </Link>
          </li>
          <li className="nav-bar" href="#resume">
            <Link to="/resume">Resume</Link>
          </li>
          <li className="nav-bar" href="#contacts">
            <Link to="/contact">Contact Me</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default NavBar;
