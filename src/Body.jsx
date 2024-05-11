import React from "react";
import Footer from "./Components/HomeComponents/Footer";
import styled from "styled-components";
import CommentsAccordian from "./Components/HomeComponents/accordian/CommentsAccordian";
import PopularBeefRecipe from "./Components/HomeComponents/popular/PopularBeefRecipe";
import Banner from "./Components/HomeComponents/Banner";
import About from "./Components/HomeComponents/About";

const Body = () => {
  return (
      <Container>
        <Banner />
        <About />
        <PopularBeefRecipe />
        <CommentsAccordian />
        <Footer />
      </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: whitesmoke;
  overflow: hidden;
`;

export default Body;
