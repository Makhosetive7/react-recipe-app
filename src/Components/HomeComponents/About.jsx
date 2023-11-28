import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <Salutation>
        hello <span>&#128075;</span>
      </Salutation>
    </Container>
  );
};

const Container = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: "Satisfy", cursive;
  font-size: 3rem;
  letter-spacing: 5px;
  width: 100%;
  background-image: url(https://images.pexels.com/photos/914388/pexels-photo-914388.jpeg?auto=compress&cs=tinysrgb&w=600);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 60vh;
`;
const Salutation = styled.h1`
  margin-top: 1rem;
  font-family: "Poor Story", cursive;
  font-size: 10rem;
  color: red;
  span {
    font-size: 5rem;
  }
`;
export default About;
