import React, { useEffect } from "react";
import { useModal } from "../Context/modalContext";
import styled from "styled-components";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  MdDriveFileRenameOutline,
  MdOutlineCategory,
  MdOutlineAddLocation,
} from "react-icons/md";

const RecipeDetailsModal = ({ recipeId }) => {
  const { closeModal } = useModal();
  const [item, setItem] = useState();
  const [activeTab, setActiveTab] = useState("Instructions");
  const { mealrecipeId } = useParams();

  //fetching details of selected meal
  if (mealrecipeId !== " ") {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.meals[0]);
        setItem(data.meals[0]);
      });
  }

  //modal handling
  const handleClose = () => {
    closeModal();
  };
  //prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [closeModal]);
  return (
    <WrapperContainer>
      <Overlay onClick={handleClose}></Overlay>
      <Container>
        <div className="closeButton">
          <button onClick={closeModal}>x</button>
        </div>
        {!item ? (
          <p>Loading recipe details...</p>
        ) : (
          <div className="containerDetails">
            <div className="imageContainer">
              <img src={item.strMealThumb} alt="" />
            </div>

            <Details>
              <h2>
                <span>
                  <MdDriveFileRenameOutline />
                </span>
                {item.strMeal} <span>recipe</span>
              </h2>
              <h2>
                <span>
                  <MdOutlineCategory />
                </span>
                {item.strCategory} <span>category</span>
              </h2>
              <h2>
                <span>
                  <MdOutlineAddLocation />
                </span>{" "}
                {item.strArea} <span>meal</span>
              </h2>
            </Details>
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
          </div>
        )}
      </Container>
    </WrapperContainer>
  );
};

const WrapperContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(149, 140, 140, 0.5);
  z-index: 1000;
`;

const Container = styled.div`
  width: 70%;
  height: 85vh;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1002;
  overflow-y: auto;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  .closeButton {
    margin: 0.5rem;
    button {
      border: none;
      background-color: transparent;
      font-size: 16px;
    }
  }

  .containerDetails {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .active {
    background-color: #c4b0ff;
    color: white;
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
  .imageContainer {
    width: 95%;
    margin: 1rem;
    img {
      height: 45vh;
      width: 100%;
    }
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: Rajdhani;
  font-size: 10px;
  span {
    margin-right: 0.5rem;
  }
  @media screen and (max-width: 830px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 15px;
  color: black;
  background-color: white;
  border: 2px solid #c4b0ff;
  margin-right: 1rem;
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
  font-size: 16px;
  font-family: Rajdhani;
  margin: 1rem;
  padding: 1rem;
`;

export default RecipeDetailsModal;
