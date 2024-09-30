// src/pages/ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Product Details Page</h1>
      <p>Showing details for product ID: {id}</p>
    </div>
  );
};

export default ProductDetails;
