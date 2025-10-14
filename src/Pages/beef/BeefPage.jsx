import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import BeefCards from "./BeefCards";
import RecipeDetailsModal from "../../Modals/RecipeDetailsModal";
import { useModal } from "../../Context/modalContext";
import { Circles } from "react-loader-spinner";

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding-top: 80px;
`;

const PageHeader = styled.div`
  background: linear-gradient(135deg, #2d3436 0%, #1a1e21 100%);
  color: white;
  padding: 4rem 0;
  margin-bottom: 3rem;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  animation: ${fadeInUp} 0.8s ease-out;
`;

const PageTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const RecipeCount = styled.div`
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const ContentSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 4rem;
`;

const LoadingState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`;

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const LoadingText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: #666;
  font-weight: 500;
`;

const RecipeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  animation: ${fadeInUp} 0.8s ease-out;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

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
      setBeef(data.meals || []);
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
    <PageContainer>
      <PageHeader>
        <HeaderContent>
          <PageTitle>Beef Recipes</PageTitle>
          <PageSubtitle>
            Discover exquisite beef dishes from around the world
          </PageSubtitle>
          <RecipeCount>{beef.length} recipes found</RecipeCount>
        </HeaderContent>
      </PageHeader>

      <ContentSection>
        {loading ? (
          <LoadingState>
            <LoaderContainer>
              <Circles
                height="60"
                width="60"
                color="#667eea"
                ariaLabel="circles-loading"
                visible={true}
              />
              <LoadingText>Loading delicious recipes...</LoadingText>
            </LoaderContainer>
          </LoadingState>
        ) : (
          <RecipeGrid>
            {beef.map((beefs) => (
              <BeefCards
                key={beefs.idMeal}
                imageurl={beefs.strMealThumb}
                title={beefs.strMeal}
                area={beefs.strArea}
                dish={beefs.strCategory}
                instructions={beefs.strInstructions}
                id={beefs.idMeal}
                onClick={() => handleOpenModal(beefs.idMeal)}
              />
            ))}
          </RecipeGrid>
        )}
      </ContentSection>

      {isOpen && (
        <RecipeDetailsModal recipeId={selectedRecipeId} onClose={closeModal} />
      )}
    </PageContainer>
  );
};

export default BeefPage;