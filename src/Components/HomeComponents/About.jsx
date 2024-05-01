import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <Statement>
        <h2>Statement</h2>
        <p>
          Indulge in culinary creativity! With www.themealdb.com as our guiding
          star, our website curates an exquisite collection of recipes to ignite
          your imagination and elevate your dining experience. From the bold
          flavors of street food to the refined elegance of gourmet cuisine, we
          showcase the best of culinary innovation and tradition from around the
          world. Whether you're looking for quick and easy recipes for busy
          weeknights or impressive dishes for special occasions, our platform has
          you covered. Join our culinary community and unleash your creativity in
          the kitchen, inspired by the culinary expertise and creativity of
          www.themealdb.com. It's time to discover new flavors, experiment with
          ingredients, and create culinary masterpieces that dazzle the taste
          buds!
        </p>
      </Statement>
      <Benefits>
        <h2>Benefits</h2>
        <ul>
          <li>Variety: Explore diverse cuisines.</li>
          <li>Inspiration: Spark new meal ideas.</li>
          <li>Convenience: Easy recipe search.</li>
          <li>Nutrition: Healthy meal options.</li>
          <li>Guidance: Clear cooking instructions.</li>
          <li>Organization: Save favorite recipes.</li>
          <li>Community: Connect with cooks.</li>
          <li>Budget-Friendly: Save on groceries.</li>
          <li>Adaptability: Customize for needs.</li>
          <li>Learning: Discover culinary insights.</li>
        </ul>
      </Benefits>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 1rem;
  background-color: #f5f5f5; 
  font-family: Rajdhani;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Statement = styled.div`
  grid-column-start: 1; 
  grid-column-end: 2;
  margin-bottom: 2rem; 
  font-size: 16px; 
  line-height: 1.5; 
  color: #333; 
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  margin: 1rem;
  padding: .5rem;
`;

const Benefits = styled.div`
  grid-column-start: 2; 
  grid-column-end: 3;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  margin: 1rem;
  padding: .5rem;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    list-style: none; 
    padding: 0; 
    margin: 0; 
  }
  li {
    margin-bottom: 0.5rem; 
    font-weight: bold; 
    color: #666; 
  }
`;

export default About;
