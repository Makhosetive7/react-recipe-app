import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";

const NavBar = () => {
  const [isVisible, setVisible] = useState(false);

  const handleNav = () => {
    setVisible(!isVisible);
  };

  const handleLinkClick = () => {
    setVisible(false); // Close small screen navigation after clicking a link
  };

  return (
    <Container>
      <div className="logo">
        <p>
          <NavLink to="/">&#127815;</NavLink>
        </p>
      </div>
      <div className={`links ${isVisible ? "active" : ""}`}>
        <ul>
          <li>
            <NavLink
              to="beefpage"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={handleLinkClick}
            >
              Beef
            </NavLink>
          </li>
          <li>
            <NavLink
              to="chickenpage"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={handleLinkClick}
            >
              Chicken
            </NavLink>
          </li>
          <li>
            <NavLink
              to="cocktailpage"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={handleLinkClick}
            >
              Cocktails
            </NavLink>
          </li>
        </ul>
      </div>

      <button className="toggle" onClick={handleNav}>
        {isVisible ? <MdClose /> : <MdMenu />}
      </button>
      {isVisible && (
        <div className="smallScreen">
          <button className="close" onClick={handleNav}>
            <MdClose />
          </button>
          <ul>
            <li>
              <NavLink
                to="beefpage"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={handleLinkClick}
              >
                Beef
              </NavLink>
            </li>
            <li>
              <NavLink
                to="chickenpage"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={handleLinkClick}
              >
                Chicken
              </NavLink>
            </li>
            <li>
              <NavLink
                to="cocktailpage"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={handleLinkClick}
              >
                Cocktails
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #c4b0ff;
  font-family: Rajdhani;
  .logo {
    padding-left: 2rem;
    font-weight: 900;
    a {
      text-decoration: none;
      font-size: 2rem;
    }
  }

  .links {
    ul {
      display: flex;
      list-style: none;
      li {
        margin: 0 1rem;
        a {
          text-decoration: none;
          color: white;
          &.active {
            font-weight: 900;
            color: black;
          }
        }
      }
    }
  }

  .toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: #c3edc0;
    margin-right: 1rem;
  }

  .smallScreen {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
  background-color: white;
    padding-top: 4rem;
    ul {
      list-style: none;
      padding: 0;
      text-align: center;
      li {
        margin-bottom: 1rem;
        a {
          text-decoration: none;
          color: #c4b0ff;
          font-size: 1.5rem;
          font-weight: 900;
          font-family: "Platypi", serif;
        }
      }
    }
    .close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1.5rem;
      color: #c3edc0;
      font-weight: 900;
    }
  }

  @media (max-width: 768px) {
    .links {
      display: none;
    }
    .toggle {
      display: block;
    }
  }
`;

export default NavBar;
