import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import PopularBeefRecipes from "./PopularBeefRecipes";
import RecipeDetailsModal from "../../../Modals/RecipeDetailsModal";

const PopularBeefRecipe = () => {
  const [recipe, setRecipe] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRecipeId, setSelectedRecipeId] = useState();

  useEffect(() => {
    getPopular();
  }, [recipe]);

  const getPopular = async () => {
    const Api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=Beef`
    );
    const data = await Api.json();
    console.log(data);
    setRecipe(data.meals.slice(0, 3));
  };

  const openModal = (id) => {
    setIsOpen(true);
    setSelectedRecipeId(id);
  };

  return (
    <Container>
      <div className="heading">
        <h2>Random Pupolar Beef Meals</h2>
      </div>
        <div className="mapping_recipes">
          {recipe &&
            recipe.map((recipes, index) => {
              return (
                <div key={recipe.idMeal}>
                  <PopularBeefRecipes
                    key={index}
                    imageurl={recipes.strMealThumb}
                    dish={recipes.strMeal}
                    area={recipes.strArea}
                    category={recipes.strCategory}
                    instructions={recipes.strInstructions}
                    id={recipes.idMeal}
                    onClick={() => openModal(recipes.idMeal)}
                  />
                </div>
              );
            })}
        </div>
      {isOpen && <RecipeDetailsModal recipeId={selectedRecipeId} />}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .heading {
    h2 {
      font-family: Rajdhani;
    }
  }
  .mapping_recipes {
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

export default PopularBeefRecipe;
