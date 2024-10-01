// src/components/ProductCard.js
// 
// import React from 'react';
// import styled from 'styled-components';

// const Card = styled.div`
//   border: 1px solid #e0e0e0;
//   padding: 20px;
//   text-align: center;
//   background-color: #fff;
//   border-radius: 10px;
//   transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
//   }
// `;

// const ProductImage = styled.img`
//   width: 100%;
//   max-width: 220px; /* Increased max width for better visibility */
//   height: auto;
//   margin-bottom: 15px;
//   border-radius: 10px;
// `;

// const ProductTitle = styled.h3`
//   font-size: 20px;
//   color: #333;
//   margin-bottom: 10px;
//   transition: color 0.3s ease-in-out;

//   &:hover {
//     color: #ff6b6b; /* Highlight color for better interactivity */
//   }
// `;

// const ProductPrice = styled.p`
//   font-size: 18px;
//   color: #007aff;
//   margin-bottom: 20px;
//   font-weight: bold;
// `;

// const AddToCartButton = styled.button`
//   background-color: #007aff;
//   color: white;
//   padding: 12px 18px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 16px;
//   transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;

//   &:hover {
//     background-color: #ff6b6b; /* Button hover effect */
//     transform: scale(1.05);
//     box-shadow: 0 4px 12px rgba(255, 107, 107, 0.4);
//   }
// `;

// const ProductCard = ({ product }) => {
//   return (
//     <Card>
//       <ProductImage src={product.image} alt={product.title} />
//       <ProductTitle>{product.title}</ProductTitle>
//       <ProductPrice>${product.price}</ProductPrice>
//       <AddToCartButton>Add to Cart</AddToCartButton>
//     </Card>
//   );
// };

// export default ProductCard;

import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 250px;
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 220px;
  height: auto;
  margin-bottom: 15px;
  border-radius: 5px;
`;

const ProductDetails = styled.div`
  text-align: left;
  margin-bottom: 15px;
`;

const ProductTitle = styled.h3`
  font-size: 16px;
  color: #333;
  font-weight: bold;
  line-height: 1.3;
  margin-bottom: 10px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ff6b6b; /* Add hover color to match the navbar */
  }
`;

const ProductPrice = styled.p`
  font-size: 18px;
  color: #007aff;
  font-weight: bold;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;

  span {
    font-size: 14px;
    color: #f0c14b;
  }
`;

const AddToCartButton = styled.button`
  background-color: #007aff;
  color: white;
  padding: 10px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    background-color: #ff6b6b;
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
  }
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      <ProductImage src={product.image} alt={product.title} />
      <ProductDetails>
        <ProductTitle>{product.title}</ProductTitle>
        <Rating>
          <span>⭐⭐⭐⭐⭐</span>
          <span>({product.reviews} reviews)</span>
        </Rating>
        <ProductPrice>${product.price}</ProductPrice>
      </ProductDetails>
      <AddToCartButton>Add to Cart</AddToCartButton>
    </Card>
  );
};

export default ProductCard;
