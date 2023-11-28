import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

import CockTailCards from "./CockTailCards";
import Filters from "../Components/HomeComponents/Filters";

const CockTailPage = () => {
  const [alcoholic, setAlcoholic] = useState([]);

  useEffect(() => {
    getAlcoholic();
  }, []);

  const getAlcoholic = async () => {
    const API = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`
    );
    const data = await API.json();
    console.log(data);
    setAlcoholic(data.drinks);
  };

  return (
    <Container>
      <div className="filters">
        <Filters />
      </div>
      <div className="cocktails_page_mapping">
        {alcoholic &&
          alcoholic.map((cocktail, index) => {
            return (
              <div>
                <CockTailCards
                  key={index}
                  imageurl={cocktail.strDrinkThumb}
                  title={cocktail.strDrink}
                  typeOfGlass={cocktail.strGlass}
                  category={cocktail.strCategory}
                  instructions={cocktail.strInstructions}
                />
              </div>
            );
          })}
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .cocktails_page_mapping {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  }
`;

export default CockTailPage;
