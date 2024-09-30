// src/pages/Dashboard.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-main">
        <Header />
        <div className="dashboard-content">
          <h1>Dashboard Overview</h1>
          <p>Welcome to your newly designed dashboard!</p>
          {/* Add additional sections like charts, stats, or tables here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
