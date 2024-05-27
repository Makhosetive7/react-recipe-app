import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CockTailCards from "./CockTailCards";
import CocktailsDetailsModal from "../../Modals/CocktailsDetailsModal";
import { useModal } from "../../Context/modalContext";
import { Circles } from "react-loader-spinner";

const CockTailPage = () => {
  const [alcoholic, setAlcoholic] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedcocktailId, setSelectedcocktailId] = useState();
  const { isOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    getAlcoholic();
  }, []);

  const getAlcoholic = async () => {
    setLoading(true);
    try {
      const API = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`);
      const data = await API.json();
      console.log(data);
      setAlcoholic(data.drinks);
    } catch (error) {
      console.error("Error fetching cocktail recipes:", error);
    }
    setLoading(false);
  };

  const handleOpenModal = (id) => {
    setSelectedcocktailId(id);
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
        <div className="cocktails_page_mapping">
          {alcoholic &&
            alcoholic.map((cocktail, index) => (
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
            ))}
        </div>
      )}
      {isOpen && (
        <CocktailsDetailsModal
          recipeId={selectedcocktailId}
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
