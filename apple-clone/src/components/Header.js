// src/components/Header.js

import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <FontAwesomeIcon icon={faApple} size="2x" />
      </div>
      <nav className="nav">
        <button className="link-button">Store</button>
        <button className="link-button">Mac</button>
        <button className="link-button">iPad</button>
        <button className="link-button">iPhone</button>
        <button className="link-button">Watch</button>
        <button className="link-button">AirPods</button>
        <button className="link-button">TV & Home</button>
        <button className="link-button">Only on Apple</button>
      </nav>
    </header>
  );
};

export default Header;
