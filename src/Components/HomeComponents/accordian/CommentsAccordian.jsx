import React from "react";
import { accordionContent } from "./AccodianContent";
import SingleCommentAccordion from "./SingleCommentAccordian";
import styled, { keyframes } from "styled-components";

const CommentsAccordion = () => {
  return (
    <Section>
      <Container>
        <Header>
          <Subtitle>Testimonials</Subtitle>
          <Title>What Our Community Says</Title>
          <Divider />
          <Description>
            Discover why food enthusiasts love cooking with our curated recipes
          </Description>
        </Header>
        
        <AccordionGrid>
          {accordionContent.map(({ title, content, image, id }) => (
            <AccordionItem key={id}>
              <SingleCommentAccordion
                title={title}
                content={content}
                image={image}
              />
            </AccordionItem>
          ))}
        </AccordionGrid>
        
        <StatsContainer>
          <Stat>
            <StatNumber>500+</StatNumber>
            <StatLabel>Happy Cooks</StatLabel>
          </Stat>
          <StatDivider />
          <Stat>
            <StatNumber>1K+</StatNumber>
            <StatLabel>Recipes Tried</StatLabel>
          </Stat>
          <StatDivider />
          <Stat>
            <StatNumber>98%</StatNumber>
            <StatLabel>Success Rate</StatLabel>
          </Stat>
        </StatsContainer>
      </Container>
    </Section>
  );
};

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const stagger = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Styled Components
const Section = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%);
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  animation: ${fadeInUp} 0.8s ease-out;
`;

const Subtitle = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  font-weight: 700;
  color: #2d3436;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Divider = styled.div`
  width: 80px;
  height: 4px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  margin: 0 auto 1.5rem;
  border-radius: 2px;
`;

const Description = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const AccordionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 4rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;

const AccordionItem = styled.div`
  animation: ${stagger} 0.6s ease-out;
  animation-fill-mode: both;
  
  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }
  &:nth-child(4) { animation-delay: 0.4s; }
  &:nth-child(5) { animation-delay: 0.5s; }
  &:nth-child(6) { animation-delay: 0.6s; }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 3rem 2rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
  animation: ${fadeInUp} 0.8s ease-out 0.8s both;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 1rem;
  }
`;

const Stat = styled.div`
  text-align: center;
  flex: 1;
`;

const StatNumber = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StatLabel = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
`;

const StatDivider = styled.div`
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, transparent, rgba(102, 126, 234, 0.3), transparent);
  
  @media (max-width: 768px) {
    width: 100px;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(102, 126, 234, 0.3), transparent);
  }
`;

export default CommentsAccordion;