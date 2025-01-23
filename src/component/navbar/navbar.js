import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">kadhai kingdom</div>
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/aboutUs">About Us</Link>
        </li>
        <li>
        <Link to="/menu">Our Menu</Link>
        </li>
        <li>
          <a href="#reserve">Reserve a Table</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
