import React from 'react';
import styled from 'styled-components';
import theme from '/Users/uncommonstudent/Desktop/web dev projects/my-react-app/src/theme.js';
import { keyframes } from 'styled-components';
import yourImage from '/Users/uncommonstudent/Desktop/web dev projects/my-react-app/src/imgs/img 3.png';
import yourImage2 from '/Users/uncommonstudent/Desktop/web dev projects/my-react-app/src/imgs/img 2.png'
import yourImage3 from '/Users/uncommonstudent/Desktop/web dev projects/my-react-app/src/imgs/Img 1.png'
import yourImage4 from '/Users/uncommonstudent/Desktop/web dev projects/my-react-app/src/imgs/img 4.png'



const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(50px);
  }
  to {
    transform: translateY(0);
  }
`;



const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
padding-top: 105px;
animation: ${fadeIn} 3s ease-in-out, ${slideIn} 3s ease-in-out;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
  @media (min-width: 1200px){
    

  }
`;

const LeftColumn = styled.div`
  
flex: 1;
    order: 1;
  @media (min-width:1200px) {
    order: 2;
gap:70px;
  }
`;

const CenterColumn = styled.div`
  text-align: center;
  order: 1;

padding:30px  5% 5%;
  @media (min-width: 768px) {
    flex: 1;
    order: 2;
  }
`;

const RightColumn = styled.div`
  order: 3;

  @media (min-width: 768px) {
    flex: 1;
    order: 3;
  }
`;

const Content = styled.div`
 @media (min-width: 1200px){
 width:650px;}
  h1 {
    color:#A0772C;
    font-size: 24px;
    margin-bottom: 10px;
    @media (min-width: 1200px){
      font-size:48px;
      font-weight:700;
      line-height:57.6px;
    }
  }

  p {
    font-family: ${props => props.theme.fonts. primary};
    margin-bottom: 20px;
    color:rgb(102 102 102);
    font-weight:500;
    @media (min-width: 1200px){
    line-height:33.6px;
    font-size:14px;
    font-weight:500;
    color:rgb(102 102 102);}
   
  }

  button {
    text-decoration: underline 2px solid #A0772C;
    border:none;
    background-color:WHITE;
    font-size:15px;
    font-weight:500;
    color:rgb(160  119 44);
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 100%;
margin-bottom:40px;
  @media (min-width: 768px) {
    max-height: 100%;
  }
`;

const About = () => {
  
  return (
    <AboutContainer  >
      <LeftColumn>
        <Image src={yourImage}  />
        <Image src={yourImage2} />
      </LeftColumn>
      <CenterColumn>
        <Content  primaryy>
          <h1>OUR <br/> STORY</h1>
         <div> <p>In 1978, Taylors Africa Safaris was founded by Professional Guide, Piers Taylor. It is now run by both himself and son, Charles as a family run, hands on safari company. Based in Zimbabwe offering a range of safaris filled with adventure and exploration like no other, Taylors Africa Safaris operates in Victoria Falls, Hwange National Park and Matobo National Park offering a multifaceted trip solely facilitated by Taylors Africa Safaris.</p> <br/> </div>

<div><p>We believe in safari as a journey that immerses the senses and awakens the spirit. Our priority at Taylors Africa is to take our clients on a once in a lifetime journey through the Western side of Zimbabwe starting in Victoria Falls or Bulawayo. .</p></div>
          <button>Find More Out About Us</button>
        </Content>
      </CenterColumn>
      <RightColumn>
        <Image src={yourImage3}/>
        <Image src={yourImage4} />
      </RightColumn>
    </AboutContainer>
  );
};

export default About;
