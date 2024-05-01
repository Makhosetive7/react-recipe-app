import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BeefCards from "./BeefCards";

const BeefPage = () => {
  const [beef, setBeef] = useState([]);
  let navigate = useNavigate();

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

  return (
    <Container>
      <div className="beef_page_mapping">
      {beef &&
        beef.map((beefs) => {
          return (
            <div onClick={() => navigate(`/${beefs.idMeal}`)}>
              <BeefCards
                key={beefs.idMeal}
                imageurl={beefs.strMealThumb}
                title={beefs.strMeal}
                area={beefs.strArea}
                category={beefs.strCategory}
                instructions={beefs.strInstructions}
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
