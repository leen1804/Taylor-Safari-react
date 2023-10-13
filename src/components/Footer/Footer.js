import React from 'react';
import styled from 'styled-components';

import footer from '/Users/uncommonstudent/Desktop/web dev projects/my-react-app/src/imgs/Ellipse 6.png';
import footer1 from '/Users/uncommonstudent/Desktop/web dev projects/my-react-app/src/imgs/Ellipse 5.png';
const FooterSection = styled.footer`
  background-color: #C2B280;
  color: #A0772C;
  text-align: center;
  padding: 50px 0;
  justify-content: center;
`;

const SectionHeader = styled.header`
  margin-bottom: 20px;
  text-align: center;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 90px 20px;
  align-items: center;
  justify-content: space-between;
  
  text-align: right; 
gap:90px;
  @media (min-width: 1200px) {
    flex-direction: row;
    padding: 90px 200px;
    
  }
`;

const LeftDiv = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  .lee{

  }
`;

const RightDiv = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const RoundedImage = styled.img`
  border-radius: 50%;
  max-width: 130px;
  height: auto;
  margin-right: 30px;
  @media (max-width: 769px) {
    max-width: 100px;
    margin-bottom:20px;
  }
`;

const PP = styled.div`

gap:200px;

@media (min-width:1200px) {
  justify-content:center ;
  display: flex;
  }
`
const Paragraph = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  text-align: left; `;

const Footer = () => {
  return (
    <FooterSection>
      <SectionHeader>
        <h2>Please contact us at Taylors Africa Safaris for a safari adventure of a lifetime</h2>
      </SectionHeader>

      <FooterContainer>
        <LeftDiv>
          <RoundedImage src={footer} alt="Bernie" />
          <div className='lee'>
            <Paragraph>
              Bernie
            </Paragraph>
            <Paragraph>
Head of bookings and logistics</Paragraph>
            <Paragraph>
              info@taylorsafrica.com
            </Paragraph>
            <Paragraph>
              +263 776 030 600
            </Paragraph>
          </div>
        </LeftDiv>

        <RightDiv>
          <RoundedImage src={footer1} alt="Charles Taylor" />
          <div>
            <Paragraph>
              Charles Taylor
            </Paragraph>
            <Paragraph>
Head of bookings and logistics</Paragraph>
            <Paragraph>
              info@taylorsafrica.com
            </Paragraph>
            <Paragraph>
              +263 776 030 600
            </Paragraph>
          </div>
        </RightDiv>
      </FooterContainer>
<PP>
      <Paragraph>&copy; {new Date().getFullYear()} Taylors Africa &bull; Built by  leenruvae</Paragraph>
      <Paragraph>Proudly Zimbabwean   </Paragraph>
      </PP>
    </FooterSection>
  );
};

export default Footer;