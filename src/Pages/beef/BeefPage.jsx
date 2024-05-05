import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BeefCards from "./BeefCards";
import RecipeDetailsModal from "../../Modals/RecipeDetailsModal";

const BeefPage = () => {
  const [beef, setBeef] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRecipeId, setSelectedRecipeId] = useState();

  useEffect(() => {
    getBeef();
  }, []);

  const getBeef = async () => {
    const API = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=Beef`
    );
    const data = await API.json();
    console.log(data);
    setBeef(data.meals);
  };

  const openModal = (id) => {
    setIsOpen(true);
    setSelectedRecipeId(id);
  };

  return (
    <Container>
      <div className="beef_page_mapping">
        {beef &&
          beef.map((beefs) => (
            <div key={beefs.idMeal}>
              <BeefCards
                imageurl={beefs.strMealThumb}
                title={beefs.strMeal}
                area={beefs.strArea}
                dish={beefs.strCategory}
                instructions={beefs.strInstructions}
                id={beefs.idMeal}
                onClick={() => openModal(beefs.idMeal)} 
              />
            </div>
          ))}
      </div>
      {isOpen && <RecipeDetailsModal recipeId={selectedRecipeId} />}
    </Container>
  );
};


const Container = styled.div`
display: flex;
flex-direction: column;
padding-top: 100px;

.beef_page_mapping{
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 900px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px){
    grid-template-columns: repeat(1, 1fr);
  }
}
`;

export default BeefPage;
