import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const MealRecipeInfo = () => {
  const [item, setItem] = useState();
  const [activeTab, setActiveTab] = useState("Instructions");
  const { mealrecipeId } = useParams();
  if (mealrecipeId !== " ") {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealrecipeId}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.meals[0]);
        setItem(data.meals[0]);
      });
  }

  return (
    <DetailsContainer>
      {!item ? (
        ""
      ) : (
        <Container>
          <div>
            <Details>
              <h2>{item.strMeal}</h2>
              <h2>
                {item.strCategory} Category || {item.strArea}
              </h2>
            </Details>
            <div>
              <img src={item.strMealThumb} alt="" />
            </div>
          </div>
          <Info>
            <Button
              className={activeTab === "Instructions" ? "active" : ""}
              onClick={() => setActiveTab("Instructions")}
            >
              Instructions
            </Button>
            <Button
              className={activeTab === "Ingredients" ? "active" : ""}
              onClick={() => setActiveTab("Ingredients")}
            >
              Ingredients
            </Button>
          </Info>

          <Instructions>
            {activeTab === "Instructions" && (
              <div>
                <h4>{item.strInstructions}</h4>
              </div>
            )}
            {activeTab === "Ingredients" && (
              <div>
                <h4>
                  {item.strIngredient1}&nbsp; || &nbsp;{item.strMeasure1}
                </h4>
                <h4>
                  {item.strIngredient2}&nbsp; || &nbsp;{item.strMeasure2}
                </h4>
                <h4>
                  {item.strIngredient3}&nbsp; || &nbsp;{item.strMeasure3}
                </h4>
                <h4>
                  {item.strIngredient4}&nbsp; || &nbsp;{item.strMeasure4}
                </h4>
                <h4>
                  {item.strIngredient5}&nbsp; || &nbsp;{item.strMeasure5}
                </h4>
                <h4>
                  {item.strIngredient6}&nbsp; || &nbsp;{item.strMeasure6}
                </h4>
                <h4>
                  {item.strIngredient7}&nbsp; || &nbsp;{item.strMeasure7}
                </h4>
                <h4>
                  {item.strIngredient8}&nbsp; || &nbsp;{item.strMeasure8}
                </h4>
              </div>
            )}
          </Instructions>
        </Container>
      )}
    </DetailsContainer>
  );
};
const DetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 90%;
  font-family: "Rajdhani", sans-serif;

  .active {
    background-color: red;
    color: black;
    font-family: "Rajdhani", sans-serif;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  img {
    height: 45vh;
    width: 100%;
  }
`;
const Details = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Orbitron", sans-serif;
  color: red;
`;
const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.5rem;
  color: red;
  background-color: #c4b0ff;
  border: 2px solid black;
  margin-top: 1.5rem;
  margin-right: 2rem;
`;
const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1.5rem;
`;

const Instructions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 2rem;
  padding: 1rem;
  font-size: 1.5rem;
  width: 90%;
`;

export default MealRecipeInfo;
