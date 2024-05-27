import React from "react";
import styled from "styled-components";
import { SiGithub } from "react-icons/si";
import { FiTwitter } from "react-icons/fi";
import { MdOutlineLiveTv } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <div className="section">
        <div className="header">About Page</div>
        <p>Delicious recipes at your fingertips. Discover, cook, and enjoy!</p>
      </div>

      <div className="section">
        <div className="header">Contact Developer</div>
        <p>Email: sibandaMakhosetive7@gmail.com</p>
        <p>Phone: +263 782 082 120</p>
        <p>Address: Bulawayo, Zimbabwe</p>
        <p>Creater: Frontend developer</p>
      </div>

      <div className="section">
        <div className="header">Follow Developer</div>
        <NavLink to="https://github.com/Makhosetive7" target="_blank">
          <SiGithub />
        </NavLink>
        <NavLink to="https://twitter.com/Makhoe_7" target="_blank">
          <FiTwitter />
        </NavLink>
        <NavLink
          to="https://makhosetive7-portfolio.netlify.app/"
          target="_blank"
        >
          <MdOutlineLiveTv />
        </NavLink>
      </div>

      <div className="section">
        <div className="header">Quick WebLinks</div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/beefPage">Beef Page</NavLink>
        <NavLink to="/chickenpage">Chicken Page</NavLink>
        <NavLink to="/cocktailPage">Coctails Page</NavLink>
      </div>

      <div className="section">
        <div className="header">Legal</div>
        <p>© 2024 Food-Recipe-App. All rights reserved.</p>
      </div>

      <div className="section">
        <div className="header">Subscribe</div>
        <form action="/subscribe" method="post">
          <input type="email" name="email" placeholder="Your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </Container>
  );
};

const Container = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2rem 0;
  background-color: #f8f9fa;
  border-top: 1px solid #ced4da;
  font-family: "Rajdhani", sans-serif;

  .section {
    flex: 1 1 200px;
    margin: 0 1rem;
    padding: 1rem;
    .header {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 1rem;
      font-weight: 900;
      color: #c4b0ff;
    }
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-bottom: 0.5rem;
      color: #333;
      text-decoration: none;

      &:hover {
        color: #ced4da;
      }
    }
    p {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
      width: 150px;
      height: auto;
    }
    button {
      margin-top: 0.5rem;
      padding: 0.5rem 1rem;
      background-color: #ced4da;
      color: black;
      font-family: "Rajdhani", sans-serif;
      border: none;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: red;
      }
    }
    form {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      input {
        width: 100%;
        border: 1px solid black;
        padding: 5px;
        height: 36px;
        outline: none;
        color: #9dbfaf;
      }
    }
  }
`;

export default Footer;
