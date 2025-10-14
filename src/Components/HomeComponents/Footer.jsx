import React, { useState } from "react";
import styled from "styled-components";
import { SiGithub } from "react-icons/si";
import { FiTwitter } from "react-icons/fi";
import { MdOutlineLiveTv } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribed with:", email);
    setEmail("");
    alert("Thank you for subscribing!");
  };

  return (
    <FooterContainer>
      <FooterContent>
        <MainSection>
          <BrandSection>
            <Logo>
              <LogoIcon>🍅</LogoIcon>
              <BrandName>Gourmet Recipes</BrandName>
            </Logo>
            <BrandDescription>
              Discover exquisite recipes and master the art of cooking. 
              Transform your kitchen into a gourmet experience with our 
              curated collection of culinary delights.
            </BrandDescription>
            <SocialLinks>
              <SocialLink 
                href="https://github.com/Makhosetive7" 
                target="_blank"
                aria-label="GitHub"
              >
                <SiGithub />
              </SocialLink>
              <SocialLink 
                href="https://twitter.com/Makhoe_7" 
                target="_blank"
                aria-label="Twitter"
              >
                <FiTwitter />
              </SocialLink>
              <SocialLink 
                href="https://makhosetive7-portfolio.netlify.app/" 
                target="_blank"
                aria-label="Portfolio"
              >
                <MdOutlineLiveTv />
              </SocialLink>
            </SocialLinks>
          </BrandSection>

          <LinksSection>
            <LinkGroup>
              <GroupTitle>Quick Links</GroupTitle>
              <StyledNavLink to="/">Home</StyledNavLink>
              <StyledNavLink to="/beefPage">Beef Recipes</StyledNavLink>
              <StyledNavLink to="/chickenpage">Chicken Recipes</StyledNavLink>
              <StyledNavLink to="/cocktailPage">Cocktails</StyledNavLink>
            </LinkGroup>

            <LinkGroup>
              <GroupTitle>Contact</GroupTitle>
              <ContactInfo>
                <ContactItem>
                  <strong>Email:</strong> sibandaMakhosetive7@gmail.com
                </ContactItem>
                <ContactItem>
                  <strong>Phone:</strong> +263 782 082 120
                </ContactItem>
                <ContactItem>
                  <strong>Location:</strong> Bulawayo, Zimbabwe
                </ContactItem>
                <ContactItem>
                  <strong>Role:</strong> Frontend Developer
                </ContactItem>
              </ContactInfo>
            </LinkGroup>

            <LinkGroup>
              <GroupTitle>Newsletter</GroupTitle>
              <NewsletterForm onSubmit={handleSubmit}>
                <NewsletterText>
                  Stay updated with new recipes and cooking tips
                </NewsletterText>
                <InputGroup>
                  <EmailInput
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <SubscribeButton type="submit">
                    Subscribe
                  </SubscribeButton>
                </InputGroup>
              </NewsletterForm>
            </LinkGroup>
          </LinksSection>
        </MainSection>

        <BottomSection>
          <Copyright>
            © 2024 Gourmet Recipes. All rights reserved.
          </Copyright>
          <LegalLinks>
            <LegalLink to="/privacy">Privacy Policy</LegalLink>
            <LegalLink to="/terms">Terms of Service</LegalLink>
            <LegalLink to="/cookies">Cookie Policy</LegalLink>
          </LegalLinks>
        </BottomSection>
      </FooterContent>
    </FooterContainer>
  );
};

// Styled Components
const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #2d3436 0%, #1a1e21 100%);
  color: white;
  padding: 4rem 0 2rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const MainSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  margin-bottom: 3rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

const LogoIcon = styled.span`
  font-size: 2.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
`;

const BrandName = styled.span`
  font-family: 'Playfair Display', serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: white;
`;

const BrandDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: white;
  font-size: 1.25rem;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  }
`;

const LinksSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const GroupTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  margin: 0 0 0.5rem 0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 1px;
  }
`;

const StyledNavLink = styled(NavLink)`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.25rem 0;

  &:hover {
    color: white;
    transform: translateX(5px);
  }

  &.active {
    color: #667eea;
    font-weight: 600;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ContactItem = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  line-height: 1.5;

  strong {
    color: white;
    font-weight: 600;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NewsletterText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  line-height: 1.5;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 480px) {
    flex-direction: row;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.15);
  }
`;

const SubscribeButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const LegalLink = styled(NavLink)`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: white;
  }
`;

export default Footer;