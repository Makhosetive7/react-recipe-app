import React from "react";
import styled, { keyframes } from "styled-components";

const Banner = () => {
  return (
    <HeroSection>
      <HeroBackground>
        <Overlay />
        <HeroContent>
          <ContentWrapper>
            <Badge>Premium Recipes</Badge>
            <HeroTitle>
              Unleash Your
              <GradientText> Culinary Skills</GradientText>
            </HeroTitle>
            <HeroSubtitle>
              Discover exquisite recipes and master the art of cooking. 
              Transform your kitchen into a gourmet experience.
            </HeroSubtitle>
            <CtaContainer>
              <PrimaryButton>Explore Recipes</PrimaryButton>
              <SecondaryButton>
                <PlayIcon>▶</PlayIcon>
                Watch Demo
              </SecondaryButton>
            </CtaContainer>
            <StatsContainer>
              <StatItem>
                <StatNumber>500+</StatNumber>
                <StatLabel>Recipes</StatLabel>
              </StatItem>
              <StatDivider />
              <StatItem>
                <StatNumber>50+</StatNumber>
                <StatLabel>Chefs</StatLabel>
              </StatItem>
              <StatDivider />
              <StatItem>
                <StatNumber>10K+</StatNumber>
                <StatLabel>Food Lovers</StatLabel>
              </StatItem>
            </StatsContainer>
          </ContentWrapper>
        </HeroContent>
      </HeroBackground>
    </HeroSection>
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

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

// Styled Components
const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  margin-top: 80px;
  overflow: hidden;
`;

const HeroBackground = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: linear-gradient(
      135deg,
      rgba(102, 126, 234, 0.1) 0%,
      rgba(118, 75, 162, 0.1) 100%
    ),
    url("https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2")
      no-repeat center center/cover;
  
  @media (max-width: 768px) {
    background-position: 65% center;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(45, 52, 54, 0.8) 0%,
    rgba(99, 110, 114, 0.6) 100%
  );
  z-index: 1;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 2rem;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  animation: ${fadeInUp} 1s ease-out;
`;

const Badge = styled.span`
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
  margin-bottom: 2rem;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;
`;

const HeroTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1.1;
  color: white;
  margin-bottom: 1.5rem;
  max-width: 800px;
  animation: ${fadeInUp} 0.8s ease-out 0.4s both;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
`;

const HeroSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  max-width: 600px;
  font-weight: 400;
  animation: ${fadeInUp} 0.8s ease-out 0.6s both;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CtaContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 4rem;
  animation: ${fadeInUp} 0.8s ease-out 0.8s both;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

const PrimaryButton = styled(Button)`
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
  color: white;

  &:hover {
    background: linear-gradient(135deg, #ee5a24 0%, #ff6b6b 100%);
  }
`;

const SecondaryButton = styled(Button)`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const PlayIcon = styled.span`
  font-size: 0.8rem;
`;

const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  animation: ${fadeInUp} 0.8s ease-out 1s both;

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #667eea;
  animation: ${float} 3s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StatLabel = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 0.5rem;
`;

const StatDivider = styled.div`
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.3);

  @media (max-width: 480px) {
    height: 30px;
  }
`;

export default Banner;