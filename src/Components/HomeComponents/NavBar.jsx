import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";

const NavBar = () => {
  const [isVisible, setVisible] = useState(false);

  const handleNav = () => {
    setVisible(!isVisible);
  };

  const handleLinkClick = () => {
    setVisible(false);
  };

  return (
    <NavContainer>
      <NavWrapper>
        <Logo>
          <NavLink to="/">
            <LogoIcon>🍅</LogoIcon>
            <LogoText>Gourmet</LogoText>
          </NavLink>
        </Logo>

        <DesktopNav>
          <NavList>
            <NavItem>
              <StyledNavLink
                to="beefpage"
                onClick={handleLinkClick}
              >
                <span>Beef</span>
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink
                to="chickenpage"
                onClick={handleLinkClick}
              >
                <span>Chicken</span>
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink
                to="cocktailpage"
                onClick={handleLinkClick}
              >
                <span>Cocktails</span>
              </StyledNavLink>
            </NavItem>
          </NavList>
        </DesktopNav>

        <MobileToggle onClick={handleNav}>
          {isVisible ? <MdClose /> : <MdMenu />}
        </MobileToggle>

        <MobileNav className={isVisible ? "active" : ""}>
          <MobileNavHeader>
            <Logo>
              <NavLink to="/" onClick={handleLinkClick}>
                <LogoIcon>🍅</LogoIcon>
                <LogoText>Gourmet</LogoText>
              </NavLink>
            </Logo>
            <CloseButton onClick={handleNav}>
              <MdClose />
            </CloseButton>
          </MobileNavHeader>
          
          <MobileNavList>
            <MobileNavItem>
              <StyledNavLink
                to="beefpage"
                onClick={handleLinkClick}
              >
                <span>Beef</span>
              </StyledNavLink>
            </MobileNavItem>
            <MobileNavItem>
              <StyledNavLink
                to="chickenpage"
                onClick={handleLinkClick}
              >
                <span>Chicken</span>
              </StyledNavLink>
            </MobileNavItem>
            <MobileNavItem>
              <StyledNavLink
                to="cocktailpage"
                onClick={handleLinkClick}
              >
                <span>Cocktails</span>
              </StyledNavLink>
            </MobileNavItem>
          </MobileNavList>
        </MobileNav>
        
        {isVisible && <Overlay onClick={handleNav} />}
      </NavWrapper>
    </NavContainer>
  );
};

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
`;

const NavWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
`;

const Logo = styled.div`
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 0.5rem;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const LogoIcon = styled.span`
  font-size: 2rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`;

const LogoText = styled.span`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3436;
  letter-spacing: -0.5px;
`;

const DesktopNav = styled.div`
  display: flex;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
`;

const NavItem = styled.li`
  position: relative;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #2d3436;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  span {
    position: relative;
    z-index: 1;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 8px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: white;
    
    &::before {
      transform: scaleX(1);
    }
  }
  
  &.active {
    color: white;
    font-weight: 600;
    
    &::before {
      transform: scaleX(1);
      background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
    }
  }
`;

const MobileToggle = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #2d3436;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.05);
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  height: 100vh;
  background: #fff;
  box-shadow: -5px 0 25px rgba(0, 0, 0, 0.1);
  transform: translateX(100%);
  transition: transform 0.3s ease;
  z-index: 1001;

  &.active {
    transform: translateX(0);
    animation: ${slideIn} 0.3s ease;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(242, 234, 234, 0.1);
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #2d3436;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.05);
    transform: scale(1.1);
  }
`;

const MobileNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MobileNavItem = styled.li`
  border-radius: 8px;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  animation: ${fadeIn} 0.3s ease;
  
  @media (min-width: 769px) {
    display: none;
  }
`;

export default NavBar;