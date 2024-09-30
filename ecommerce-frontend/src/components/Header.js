// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Dashboard</h1>
      <div className="header-actions">
        <button>Notifications</button>
        <button>Profile</button>
      </div>
    </header>
  );
};

export default Header;
