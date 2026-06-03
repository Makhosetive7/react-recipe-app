import React from "react";
import Footer from "./Components/HomeComponents/Footer";
import styled from "styled-components";
import CommentsAccordian from "./Components/HomeComponents/accordian/CommentsAccordian";
import Banner from "./Components/HomeComponents/Banner";
import About from "./Components/HomeComponents/About";
import FeaturedCategories from "./Components/HomeComponents/FeaturedCategories";
import Search from "./Components/HomeComponents/Search";

const Body = () => {
  return (
    <Container>
      <Banner />
      <FeaturedCategories />
      <Search />
      <About />
      <CommentsAccordian />
      <Footer />
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: var(--color-bg);
  overflow-x: hidden;
`;

export default Body;
