import React, { useState } from 'react';
import styled from 'styled-components';
import yourImage4 from '/Users/uncommonstudent/Desktop/web dev projects/my-react-app/src/imgs/MobileLogoSepia2 1.png';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: none;
  height: 20vh;
  color: #8B4513;
  padding-left: 95px;
  padding-right: 150px;
  padding-top: 60px;

  
`;

const Logo = styled.div`
  width: 20px;
  height: 130px;
  background-color: grey;
  

  img {
    width: auto;
    height: 130px;
   
  }

  @media (max-width: 768px) {
    display: block; 
    margin-left :-40px; 
    
  }
`;

const Nav = styled.nav`
  padding-left: 100px;

  ul {
    list-style: none;
    display: flex;
    gap: 50px;
    text-decoration: none;

    @media (max-width: 768px) {
      display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
      flex-direction: column;
      align-items: flex-start;
      background-color: white;
      position: absolute;
      top: 100px;
      left: 0;
      width: 100%;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      padding: 20px; 
    }
  }

  ul li a {
    text-decoration: none;
    color: rgb(160, 119, 44);
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    display: block;
    gap: 10px;
  }

  ul li a:hover {
    color: rgb(239, 238, 212);
  }
`;

const LeftNav = styled.div`
  display: flex;
  align-items: center;
`;

const RightNav = styled.div`
  padding-left: -70px;
  display: flex;
  align-items: center;
`;

const HamburgerIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 24px;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <HamburgerIcon onClick={toggleNav}>{isOpen ? '✕' : '☰'}</HamburgerIcon>
      <LeftNav>
        <Nav isOpen={isOpen}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </Nav>
      </LeftNav>

      <Logo isOpen={isOpen}>
        <img src={yourImage4} alt="Logo" />
      </Logo>

      <RightNav>
        <Nav isOpen={isOpen}>
          <ul>
            <li><a href="/mobile-safari">Mobile Safari</a></li>
            <li><a href="/safari-train">Safari Train</a></li>
            <li><a href="/safari-rally">Safari Rally</a></li>
          </ul>
        </Nav>
      </RightNav>
    </HeaderContainer>
  );
};

export default Header;

