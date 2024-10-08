import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure this file exists

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>My Beautiful App</h2>
      </div>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/ToggleMessage">ToggleMessage</Link></li>
        <li><Link to="/Counter">Counter</Link></li>
        <li><Link to="/clock">Clock</Link></li>
        <li><Link to="/Userform">Userform</Link></li>
        <li><Link to="/Mihir">Mihir</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
