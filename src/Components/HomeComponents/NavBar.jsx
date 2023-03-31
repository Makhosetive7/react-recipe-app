import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
    <Hamburger onClick={() => setIsOpen(!isOpen)}>
      <span />
      <span />
      <span />
    </Hamburger>
    <Menu isOpen={isOpen}>
         <div>
            <h1>
              <NavLink to="/">Food Recipe WebApp</NavLink>
            </h1>
        </div>
        
        <div>
          <ul class="nav">
              <li>
                <NavLink to="beefpage">
                <span>Beef</span>
                  <div class = "emoji">&#127830;</div>
                  </NavLink>
              </li>

              <li>
                <NavLink to="chickenpage">
                <span>Chicken</span>
                  <div class = "emoji">&#127831;</div>
                  </NavLink>
              </li>

              <li>
                <NavLink to="cocktailpage">
                <span>Cocktails</span>
                  <div class = "emoji">&#129346;</div>
                  </NavLink>
              </li>
              
              <li>
                <NavLink to="favorites">
                <span>Favorites</span>
                  <div class = "emoji">&#128159;</div>
                  </NavLink>
              </li>
              <div class="background"></div>
          </ul>
        </div>
          

      
    
    </Menu>
  </Nav>
  )
}

const Nav = styled.div`
  border-bottom: 2px solid red;
  background-color: whitesmoke;

  ul{  
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
}
 
  .active{
    color: red;

  }

`;

const Menu = styled.div`
  display: block;
  align-items: center;
  position: relative;
  width: 100%;

  h1{
    display: flex;
    justify-content: center;
    align-items: center;

    a{
      text-decoration: none;
      font-size: 2.5rem;
      padding-top: 1rem;
    }
  }

    .background {
    position: fixed;
    z-index: -1;
    width: 100%;
    transition: .75s;
  }

  ul{  
    list-style-type: none;
  }

  li a{ 
    padding: 30px;
    float:left;
    width: 100px;
    text-align:center;
    font-size: 1.5rem;
    font-weight: bold;
    font-family: 'Rajdhani', sans-serif;
    color: black;
    text-decoration:none;
  }

  
  li span{
    height: 50px;
  }

  li a:hover span {
    transform: translateY(-10px);
  }

  li a .emoji{
    font-size:0px;
  }

  li a:hover .emoji {
    transform: translateY(10px);
    font-size: 2.5rem;
    transition: .5s;
  }
        
  li a.emoji:hover{
    transform: translateY(-10px);
  }

  @keyframes illuminate {
    0% {
      transform: scale(.7, .7);
      opacity: 0.7;
    }
    50% {
      opacity: 0.3;
    }
    100%{
      transform: scale(1.15);
      opacity: 0;
    }
  }

  @media (max-width: 900px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
    
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 7vh;
  cursor: pointer;
  span {
    height: 5px;
    width: 35px;
    background: red;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 900px) {
    display: flex;
  }
`;

export default NavBar
