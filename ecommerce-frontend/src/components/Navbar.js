// src/components/Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// const NavbarContainer = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   padding: 20px;
//   background-color: #f8f8f8;
// `;

// const Logo = styled.div`
//   font-size: 24px;
//   font-weight: bold;
// `;

// const NavLinks = styled.div`
//   display: flex;
//   gap: 20px;
//   align-items: center;
// `;

// const Navbar = () => {
//   return (
//     <NavbarContainer>
//       <Logo>TECH-VERSE</Logo>
//       <NavLinks>
//         <Link to="/">Home</Link>
//         <Link to="/products">Products</Link>
//         <Link to="/cart">Cart</Link>
//       </NavLinks>
//     </NavbarContainer>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #333; /* Dark background for contrast */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    color: #ff6b6b; /* Highlight color on hover */
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
`;

const StyledLink = styled(Link)`
  font-size: 18px;
  color: #fff;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #ff6b6b; /* Button-like hover effect */
    color: #fff;
    box-shadow: 0 4px 15px rgba(255, 107, 107, 0.5);
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>TECH-VERSE</Logo>
      <NavLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
        <StyledLink to="/cart">Cart</StyledLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
