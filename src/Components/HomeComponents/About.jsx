import React from "react";
import styled, { keyframes } from "styled-components";
import {
  MdOutlineFastfood,
  MdEmojiFoodBeverage,
  MdFastfood,
  MdFoodBank,
} from "react-icons/md";
import { FaPizzaSlice } from "react-icons/fa";
import { GiBananaBunch, GiOrange, GiStrawberry, GiPeach } from "react-icons/gi";

const About = () => {
  return (
    <AboutSection>
      <Container>
        <Header>
          <Subtitle>Our Culinary Philosophy</Subtitle>
          <Title>Where Passion Meets Flavor</Title>
          <Divider />
        </Header>
        
        <ContentGrid>
          <StatementCard>
            <CardHeader>
              <IconWrapper>
                <MdFoodBank />
              </IconWrapper>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <StatementText>
              Indulge in culinary creativity! With{" "}
              <HighlightedLink
                href="https://www.themealdb.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                www.themealdb.com
              </HighlightedLink>{" "}
              as our guiding star, we curate an exquisite collection of recipes 
              to ignite your imagination and elevate your dining experience.
            </StatementText>
            <StatementText>
              From the bold flavors of street food to the refined elegance of
              gourmet cuisine, we showcase the best of culinary innovation and
              tradition from around the world. Whether you're looking for quick
              and easy recipes for busy weeknights or impressive dishes for
              special occasions, our platform has you covered.
            </StatementText>
            <StatementText>
              Join our culinary community and unleash your creativity in the 
              kitchen, inspired by the expertise of top chefs worldwide. Discover 
              new flavors, experiment with ingredients, and create culinary 
              masterpieces that dazzle the taste buds!
            </StatementText>
          </StatementCard>

          <BenefitsCard>
            <CardHeader>
              <IconWrapper>
                <MdOutlineFastfood />
              </IconWrapper>
              <CardTitle>Why Cook With Us</CardTitle>
            </CardHeader>
            <BenefitsGrid>
              <BenefitItem>
                <BenefitIcon>
                  <MdEmojiFoodBeverage />
                </BenefitIcon>
                <BenefitContent>
                  <BenefitTitle>Explore Diverse Cuisines</BenefitTitle>
                  <BenefitDesc>Global recipes from traditional to modern fusion</BenefitDesc>
                </BenefitContent>
              </BenefitItem>
              
              <BenefitItem>
                <BenefitIcon>
                  <MdFastfood />
                </BenefitIcon>
                <BenefitContent>
                  <BenefitTitle>Easy Recipe Search</BenefitTitle>
                  <BenefitDesc>Find perfect recipes with intuitive filtering</BenefitDesc>
                </BenefitContent>
              </BenefitItem>
              
              <BenefitItem>
                <BenefitIcon>
                  <MdFoodBank />
                </BenefitIcon>
                <BenefitContent>
                  <BenefitTitle>Healthy Meal Options</BenefitTitle>
                  <BenefitDesc>Nutrition-focused recipes for every diet</BenefitDesc>
                </BenefitContent>
              </BenefitItem>
              
              <BenefitItem>
                <BenefitIcon>
                  <FaPizzaSlice />
                </BenefitIcon>
                <BenefitContent>
                  <BenefitTitle>Save Favorite Recipes</BenefitTitle>
                  <BenefitDesc>Build your personal cookbook collection</BenefitDesc>
                </BenefitContent>
              </BenefitItem>
              
              <BenefitItem>
                <BenefitIcon>
                  <GiBananaBunch />
                </BenefitIcon>
                <BenefitContent>
                  <BenefitTitle>Connect With Cooks</BenefitTitle>
                  <BenefitDesc>Share experiences with food lovers worldwide</BenefitDesc>
                </BenefitContent>
              </BenefitItem>
              
              <BenefitItem>
                <BenefitIcon>
                  <GiOrange />
                </BenefitIcon>
                <BenefitContent>
                  <BenefitTitle>Save On Groceries</BenefitTitle>
                  <BenefitDesc>Smart recipes that maximize your budget</BenefitDesc>
                </BenefitContent>
              </BenefitItem>
              
              <BenefitItem>
                <BenefitIcon>
                  <GiPeach />
                </BenefitIcon>
                <BenefitContent>
                  <BenefitTitle>Customize For Needs</BenefitTitle>
                  <BenefitDesc>Adapt recipes to dietary restrictions</BenefitDesc>
                </BenefitContent>
              </BenefitItem>
              
              <BenefitItem>
                <BenefitIcon>
                  <GiStrawberry />
                </BenefitIcon>
                <BenefitContent>
                  <BenefitTitle>Culinary Insights</BenefitTitle>
                  <BenefitDesc>Learn techniques from professional chefs</BenefitDesc>
                </BenefitContent>
              </BenefitItem>
            </BenefitsGrid>
          </BenefitsCard>
        </ContentGrid>
        
        <CtaSection>
          <CtaText>Ready to start your culinary journey?</CtaText>
          <CtaButton>Explore Recipes Now</CtaButton>
        </CtaSection>
      </Container>
    </AboutSection>
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

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

// Styled Components
const AboutSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
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
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Divider = styled.div`
  width: 80px;
  height: 4px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  margin: 0 auto;
  border-radius: 2px;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  animation: ${fadeInUp} 0.8s ease-out;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  }
`;

const StatementCard = styled(Card)`
  animation-delay: 0.2s;
`;

const BenefitsCard = styled(Card)`
  animation-delay: 0.4s;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`;

const CardTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.75rem;
  font-weight: 600;
  color: #2d3436;
  margin: 0;
`;

const StatementText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const HighlightedLink = styled.a`
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
  
  &:hover {
    color: #764ba2;
    border-bottom-color: #764ba2;
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(102, 126, 234, 0.05);
    transform: translateX(5px);
  }
`;

const BenefitIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
  flex-shrink: 0;
`;

const BenefitContent = styled.div`
  flex: 1;
`;

const BenefitTitle = styled.h4`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3436;
  margin: 0 0 0.25rem 0;
`;

const BenefitDesc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #666;
  margin: 0;
  line-height: 1.5;
`;

const CtaSection = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  color: white;
  animation: ${fadeInUp} 0.8s ease-out 0.6s both;
`;

const CtaText = styled.p`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const CtaButton = styled.button`
  background: white;
  color: #667eea;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    animation: ${pulse} 1s ease-in-out;
  }
`;

export default About;