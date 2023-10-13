import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const TestimonialSection = styled.section`
 
  @media (min-width: 1200px) {
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 3%;
    
  }
`;

const SectionHeader = styled.header`
  margin-bottom: 20px;
`;

const TestimonialHeading = styled.h1`
  font-size: 32px;
  color: #a0772c;
  margin-bottom: 10px;
  margin-top:50px;
  @media (min-width: 1200px) {
    font-size: 45px;
    margin-bottom: 50px;
    
    text-align:left;
  }
`;

const TestimonialParagraph = styled.p`
  font-size: 16px;
  color: black;
  margin-bottom: 50px;
  line-height: 35px;
  @media (min-width: 1200px) {
    text-align:left;
  }
`;

const TestimonialParagraphl = styled.p`
  color: #A0772C;
  margin-bottom: 50px;
`;

const TestimonialParagraphll = styled.p`
  color: #A0772C;
  margin-bottom: 50px;
  line-height: 40px;
`;





const CarouselSection = styled.div`
  padding: 40px;
`;

const TestimonialData = [
  {
    title: 'Client testimonials',
    ltext: '7 night Zimbabwe safari 5 Couples',
    text:
      'We were booked on the 7 night Zimbabwe safari. But such is the thoroughness of Charles Taylor we had the best holiday. We had very comfortable accommodation, and the food was fantastically prepared by Nelson. Victoria Falls was such fun and the game viewing in Hwange national park was world class. The trips into Matobo were fantastic. We went Rhino tracking on foot, and this is definitely a highlight. Coming within 30 meters of Rhino and having them sense you and eye you off is exhilarating! We visited traditional villages and communities and saw how people really live, not a staged tourist village. We hiked up to see some incredible rock paintings in a cave and had a fantastic sundowner at Rhodes grave. On our last day, when the tour was scheduled to finish, Charles found out we had an afternoon to kill, so he went out of his way to show us around the Bulawayo Club and a visit to the railway museum, which is very interesting. I thoroughly recommend this tour and the services of Charles Taylor.',
    ltext2: 'Amy - Australia',
  },
  
  {
    title: 'Client testimonials',
    ltext: 'Best safari experience in Zimbabwe!',
    text:
      'We were booked on the 7 night Zimbabwe safari. But such is the thoroughness of Charles Taylor we had the best holiday. We had very comfortable accommodation, and the food was fantastically prepared by Nelson. Victoria Falls was such fun and the game viewing in Hwange national park was world class. The trips into Matobo were fantastic. We went Rhino tracking on foot, and this is definitely a highlight. Coming within 30 meters of Rhino and having them sense you and eye you off is exhilarating! We visited traditional villages and communities and saw how people really live, not a staged tourist village. We hiked up to see some incredible rock paintings in a cave and had a fantastic sundowner at Rhodes grave. On our last day, when the tour was scheduled to finish, Charles found out we had an afternoon to kill, so he went out of his way to show us around the Bulawayo Club and a visit to the railway museum, which is very interesting. I thoroughly recommend this tour and the services of Charles Taylor.',
    ltext2: 'Amy - Australia',
  },
  
  {
    title: 'Client testimonials',
    ltext: '7 night Zimbabwe safari 5 Couples',
    text:
      'We were booked on the 7 night Zimbabwe safari. But such is the thoroughness of Charles Taylor we had the best holiday. We had very comfortable accommodation, and the food was fantastically prepared by Nelson. Victoria Falls was such fun and the game viewing in Hwange national park was world class. The trips into Matobo were fantastic. We went Rhino tracking on foot, and this is definitely a highlight. Coming within 30 meters of Rhino and having them sense you and eye you off is exhilarating! We visited traditional villages and communities and saw how people really live, not a staged tourist village. We hiked up to see some incredible rock paintings in a cave and had a fantastic sundowner at Rhodes grave. On our last day, when the tour was scheduled to finish, Charles found out we had an afternoon to kill, so he went out of his way to show us around the Bulawayo Club and a visit to the railway museum, which is very interesting. I thoroughly recommend this tour and the services of Charles Taylor.',
    ltext2: 'Amy - Australia',
  },
  
  {
    title: 'Client testimonials',
    ltext: '7 night Zimbabwe safari 5 Couples',
    text:
      'We were booked on the 7 night Zimbabwe safari. But such is the thoroughness of Charles Taylor we had the best holiday. We had very comfortable accommodation, and the food was fantastically prepared by Nelson. Victoria Falls was such fun and the game viewing in Hwange national park was world class. The trips into Matobo were fantastic. We went Rhino tracking on foot, and this is definitely a highlight. Coming within 30 meters of Rhino and having them sense you and eye you off is exhilarating! We visited traditional villages and communities and saw how people really live, not a staged tourist village. We hiked up to see some incredible rock paintings in a cave and had a fantastic sundowner at Rhodes grave. On our last day, when the tour was scheduled to finish, Charles found out we had an afternoon to kill, so he went out of his way to show us around the Bulawayo Club and a visit to the railway museum, which is very interesting. I thoroughly recommend this tour and the services of Charles Taylor.',
    ltext2: 'Amy - Australia',
  },
  
];

const TestimonialCarousel = () => {
  return (
    <TestimonialSection>
      <SectionHeader>
        <TestimonialHeading>Client testimonials</TestimonialHeading>
      </SectionHeader>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={false}
        interval={5000}
      >
        {TestimonialData.map((item, index) => (
          <CarouselSection key={index}>
            <TestimonialParagraphl>{item.ltext}</TestimonialParagraphl>
            <TestimonialParagraph>{item.text}</TestimonialParagraph>
            <TestimonialParagraphll>{item.ltext2}</TestimonialParagraphll>
          </CarouselSection>
        ))}
      </Carousel>
      
    </TestimonialSection>
  );
};

export default TestimonialCarousel;
