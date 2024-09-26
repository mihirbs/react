// BeautifulCard.js
import React from 'react';
import './BeautifulCard.css'; // Importing CSS for styling

const BeautifulCard = () => {
  return (
    <div className="card-container">
      <div className="card">
        <h2 className="card-title">Welcome to My Beautiful Card</h2>
        <p className="card-description">
          This is an example of a beautiful card component made in React. You can use it to display information or content in an attractive way!
        </p>
        <button className="card-button">Learn More</button>
      </div>
    </div>
  );
};

export default BeautifulCard;
