import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import CockTailCards from "./CockTailCards";
import { useNavigate } from "react-router-dom";

const CockTailPage = () => {
  const navigate = useNavigate()
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
      <div className="cocktails_page_mapping">
        {alcoholic &&
          alcoholic.map((cocktail, index) => {
            return (
              <div onClick = {() => (navigate(`/${cocktail.idDrink}`))}>
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
  padding-top: 100px;
  .cocktails_page_mapping {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media screen and (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default CockTailPage;
