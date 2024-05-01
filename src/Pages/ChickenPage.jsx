import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import ChickenCards from "./ChickenCards";
import Filters from "../Components/HomeComponents/Filters";

const ChickenPage = () => {
  const [chicken, setChicken] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    getChicken();
  }, []);

  const getChicken = async () => {
    const API = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken`
    );
    const data = await API.json();
    console.log(data);
    setChicken(data.meals);
  };

  return (
    <Container>
      <div className="chickens_page_mapping">
        {chicken &&
          chicken.map((chickens, index) => {
            return (
              <div onClick={() => navigate(`/${chickens.idMeal}`)}>
                <ChickenCards
                  key={index}
                  imageurl={chickens.strMealThumb}
                  title={chickens.strMeal}
                  area={chickens.strArea}
                  category={chickens.strCategory}
                  instructions={chickens.strInstructions}
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
  .chickens_page_mapping {
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

export default ChickenPage;
