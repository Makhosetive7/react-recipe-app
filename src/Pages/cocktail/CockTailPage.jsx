import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import CockTailCards from "./CockTailCards";
import CocktailsDetailsModal from "../../Modals/CocktailsDetailsModal";
import { useModal } from "../../Context/modalContext"; 

const CockTailPage = () => {
  const [alcoholic, setAlcoholic] = useState([]);;
  const [selectedcocktailId, setSelectedcocktailId] = useState();
  const { isOpen, openModal, closeModal } = useModal();
 

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
  const handleOpenModal = (id) => {
    setSelectedcocktailId(id);
    openModal();
  };

  return (
    <Container>
      <div className="cocktails_page_mapping">
        {alcoholic &&
          alcoholic.map((cocktail, index) => {
            return (
              <div key={cocktail.idDrink}>
                <CockTailCards
                  key={index}
                  imageurl={cocktail.strDrinkThumb}
                  title={cocktail.strDrink}
                  typeOfGlass={cocktail.strGlass}
                  category={cocktail.strCategory}
                  instructions={cocktail.strInstructions}
                  id={cocktail.idDrink}
                  onClick={() => handleOpenModal(cocktail.idDrink)}
                />
              </div>
            );
          })}
      </div>
      {isOpen && <CocktailsDetailsModal recipeId={selectedcocktailId} closeModal={closeModal}/>}
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
