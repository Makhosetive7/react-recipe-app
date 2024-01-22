import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <div classname="left">
        <h1>
          hello <span>&#128075;</span>
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
          minima odit, delectus..
        </p>
        <button classname="btn">View recipes</button>
      </div>
      <div className="right">
        <img
          src="https://images.pexels.com/photos/684964/pexels-photo-684964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </Container>
  );
};

const Container = styled.h1`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-family: "Satisfy", cursive;
  letter-spacing: 5px;
  width: 100%;
  height: 60vh;

  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 30rem;
      height: 30rem;
      border-top-right-radius: 30px;
      border-bottom-left-radius: 30px;
    }
  }
  p {
    font-size: 1.5rem;
    color: #c4b0ff;
    padding-left: 2rem;
    font-family: "Rajdhani", sans-serif;
  }
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    color: red;
  }
  button {
    width: 10rem;
    height: 3rem;
    margin-left: 2rem;
    background-color: #c4b0ff;
    font-family: "Rajdhani", sans-serif;
    font-size: 1rem;
    font-weight: 900;
    border: 1px solid transparent;
    color: red;
  }
`;

export default About;
