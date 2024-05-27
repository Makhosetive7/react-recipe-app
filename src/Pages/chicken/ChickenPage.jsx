import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ChickenCards from "./ChickenCards";
import RecipeDetailsModal from "../../Modals/RecipeDetailsModal";
import { useModal } from "../../Context/modalContext";
import { Circles } from "react-loader-spinner";

const ChickenPage = () => {
  const [chicken, setChicken] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const { isOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    getChicken();
  }, []);

  const getChicken = async () => {
    setLoading(true);
    try {
      const API = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken`
      );
      const data = await API.json();
      console.log(data);
      setChicken(data.meals);
    } catch (error) {
      console.error("Error fetching chicken recipes:", error);
    }
    setLoading(false);
  };

  const handleOpenModal = (id) => {
    setSelectedRecipeId(id);
    openModal();
  };

  return (
    <Container>
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
        <div className="chickens_page_mapping">
          {chicken &&
            chicken.map((chickens, index) => (
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
            ))}
        </div>
      )}
      {isOpen && (
        <RecipeDetailsModal
          recipeId={selectedRecipeId}
          closeModal={closeModal}
        />
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
