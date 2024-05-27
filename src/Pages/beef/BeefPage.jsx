import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BeefCards from "./BeefCards";
import RecipeDetailsModal from "../../Modals/RecipeDetailsModal";
import { useModal } from "../../Context/modalContext";
import { Circles } from "react-loader-spinner";

const BeefPage = () => {
  const [beef, setBeef] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const { isOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    getBeef();
  }, []);

  const getBeef = async () => {
    setLoading(true);
    try {
      const API = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=Beef`
      );
      const data = await API.json();
      setBeef(data.meals);
    } catch (error) {
      console.error("Error fetching beef recipes:", error);
    }
    setLoading(false);
  };

  const handleOpenModal = (id) => {
    setSelectedRecipeId(id);
    openModal();
  };

  return (
    <Container>
      <div className="beef_page_mapping">
        {loading ? (
          <div className="loaders">
            <span>
              <Circles
                height="50"
                width="50"
                color="#c4b0ff"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </span>
          </div>
        ) : (
          beef &&
          beef.map((beefs) => (
            <div key={beefs.idMeal}>
              <BeefCards
                imageurl={beefs.strMealThumb}
                title={beefs.strMeal}
                area={beefs.strArea}
                dish={beefs.strCategory}
                instructions={beefs.strInstructions}
                id={beefs.idMeal}
                onClick={() => handleOpenModal(beefs.idMeal)}
              />
            </div>
          ))
        )}
      </div>
      {isOpen && (
        <RecipeDetailsModal recipeId={selectedRecipeId} onClose={closeModal} />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  .loaders {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .beef_page_mapping {
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
export default BeefPage;
