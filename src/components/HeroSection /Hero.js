import React from 'react';
import styled from 'styled-components';
import image1 from '/Users/uncommonstudent/Desktop/web dev projects/my-react-app/src/imgs/Hero.png'
import { ImFacebook2 } from 'react-icons/im';
import { FaInstagram} from "react-icons/fa6"

const HeroSection = styled.div`
  background-image: url(${image1});
  background-size: cover;
  
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column; 
    text-align: center; 
    margin-top: 10px;
    min-height: 70vh;
    
  }
  @media (min-width: 1200px) {
    background-position: center;
  }
    
   
`;

const Content = styled.div`
  margin-bottom: -30%;
  margin-right: -40px;
  font-size: 50px;
  color: goldenrod;
  @media (max-width: 768px) {
    font-size: 30px;
    margin-top: 50%;
  }
`;

const Heading1 = styled.h1`
  font-size: 20px;
  color: #A0772C;
  

  @media (max-width: 1200px) {
    font-size: 40px;
    margin-top: -9%; 
   
  }
  @media (min-width: 1200px) {
    font-size: 48px;
    margin-top: -16%;
  }
  @media (max-width: 768px) {
    
    margin-top: -30%;
  }
`;

function Hero() {
  return (
    <HeroSection>
      <Heading1>LET US TAKE YOU ON AN ADVENTURE</Heading1>
      <Content>
      <ImFacebook2
        style={{ color: 'orange', backgroundColor: 'white' }}
        size={32}
      /> <FaInstagram
      style={{ color: 'white', backgroundColor: 'orange' }}
      size={32}
      />
      </Content>
    </HeroSection>
  );
}

export default Hero;
