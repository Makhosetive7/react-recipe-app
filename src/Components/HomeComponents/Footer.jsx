import React from "react";
import styled from "styled-components";
import { SiFacebook } from "react-icons/si";
import { FiTwitter } from "react-icons/fi";
import { SiInstagram } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <Container>
      <Social>
        <SiFacebook />
        <FiTwitter />
        <SiInstagram />
        <AiOutlineMail />
      </Social>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  background-color: #eee;
  border-top: 1px solid black;
`;

const Social = styled.div`
  display: flex;
  gap: 1rem;
  color: #c4b0ff
  font-size: 2rem;
`;

export default Footer;
