// src/pages/Home.js
import React from 'react';
import ProductList from '../components/ProductList';
import s21 from '../assets/download (1).jpg';
import qled from '../assets/download.jpg'

const Home = () => {
  const products = [
    { id: 1, title: 'Samsung Galaxy S21', price: 799, image: s21 },
    { id: 2, title: 'Samsung QLED TV', price: 1200, image: qled },
    // Add more products here
  ];

  return (
    <div>
      <h1>Featured Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
