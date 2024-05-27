import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ChickenCards from "./ChickenCards";
import RecipeDetailsModal from "../../Modals/RecipeDetailsModal";
import { useModal } from "../../Context/modalContext"; 

const ChickenPage = () => {
  const [chicken, setChicken] = useState([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const { isOpen, openModal, closeModal } = useModal();

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

  const handleOpenModal = (id) => {
    setSelectedRecipeId(id);
    openModal();
  };

  return (
    <Container>
      <div className="chickens_page_mapping">
        {chicken &&
          chicken.map((chickens, index) => {
            return (
              <div key={chickens.idMeal}>
                <ChickenCards
                  key={index}
                  imageurl={chickens.strMealThumb}
                  title={chickens.strMeal}
                  area={chickens.strArea}
                  category={chickens.strCategory}
                  instructions={chickens.strInstructions}
                  id={chickens.idMeal}
                  onClick={() => handleOpenModal(chickens.idMeal)} 
                />
              </div>
            );
          })}
      </div>
      {isOpen && <RecipeDetailsModal recipeId={selectedRecipeId} closeModal={closeModal} />}
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
