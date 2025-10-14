import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import CockTailCards from "./CockTailCards";
import CocktailsDetailsModal from "../../Modals/CocktailsDetailsModal";
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

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  text-align: center;
  gap: 1rem;
`;

const EmptyStateIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const EmptyStateTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: #2d3436;
  margin-bottom: 0.5rem;
`;

const EmptyStateText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: #666;
  max-width: 500px;
  line-height: 1.6;
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

const CockTailPage = () => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCocktailId, setSelectedCocktailId] = useState();
  const { isOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    getCocktails();
  }, []);

  const getCocktails = async () => {
    setLoading(true);
    setError(null);
    try {
      const API = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`);
      const data = await API.json();
      
      // Handle cases where data.drinks might be null or undefined
      if (data.drinks && Array.isArray(data.drinks)) {
        setCocktails(data.drinks);
      } else {
        setCocktails([]);
        setError("No cocktails found. Please try a different search.");
      }
    } catch (error) {
      console.error("Error fetching cocktail recipes:", error);
      setError("Failed to load cocktails. Please try again later.");
      setCocktails([]);
    }
    setLoading(false);
  };

  const handleOpenModal = (id) => {
    setSelectedCocktailId(id);
    openModal();
  };

  // Safe array check before mapping
  const cocktailList = Array.isArray(cocktails) ? cocktails : [];

  return (
    <PageContainer>
      <PageHeader>
        <HeaderContent>
          <PageTitle>Cocktail Recipes</PageTitle>
          <PageSubtitle>
            Discover exquisite cocktails and mixed drinks from around the world
          </PageSubtitle>
          <RecipeCount>{cocktailList.length} cocktails found</RecipeCount>
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
              <LoadingText>Mixing delicious cocktails...</LoadingText>
            </LoaderContainer>
          </LoadingState>
        ) : error ? (
          <EmptyState>
            <EmptyStateIcon>🍸</EmptyStateIcon>
            <EmptyStateTitle>No Cocktails Found</EmptyStateTitle>
            <EmptyStateText>
              {error}
            </EmptyStateText>
          </EmptyState>
        ) : cocktailList.length === 0 ? (
          <EmptyState>
            <EmptyStateIcon>🍹</EmptyStateIcon>
            <EmptyStateTitle>No Cocktails Available</EmptyStateTitle>
            <EmptyStateText>
              We couldn't find any cocktails at the moment. Please check back later or try refreshing the page.
            </EmptyStateText>
          </EmptyState>
        ) : (
          <RecipeGrid>
            {cocktailList.map((cocktail) => (
              <CockTailCards
                key={cocktail.idDrink}
                imageurl={cocktail.strDrinkThumb}
                title={cocktail.strDrink}
                typeOfGlass={cocktail.strGlass}
                category={cocktail.strCategory}
                instructions={cocktail.strInstructions}
                id={cocktail.idDrink}
                onClick={() => handleOpenModal(cocktail.idDrink)}
              />
            ))}
          </RecipeGrid>
        )}
      </ContentSection>

      {isOpen && (
        <CocktailsDetailsModal
          recipeId={selectedCocktailId}
          onClose={closeModal}
        />
      )}
    </PageContainer>
  );
};

export default CockTailPage;