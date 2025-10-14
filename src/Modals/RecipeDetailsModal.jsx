import React, { useEffect, useState, useCallback } from "react"; 
import { useModal } from "../Context/modalContext";
import styled, { keyframes } from "styled-components";
import {
  MdDriveFileRenameOutline,
  MdOutlineCategory,
  MdOutlineAddLocation,
  MdOutlineClose,
  MdRestaurant,
  MdLocalBar
} from "react-icons/md";
import { Circles } from "react-loader-spinner";

const RecipeDetailsModal = ({ recipeId, onClose }) => {
  const { closeModal } = useModal();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchRecipeDetails = useCallback(async () => {
    if (!recipeId) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
      );
      const data = await response.json();

      if (data.meals && data.meals[0]) {
        setItem(data.meals[0]);
      } else {
        setError("Recipe not found");
      }
    } catch (err) {
      console.error("Error fetching recipe details:", err);
      setError("Failed to load recipe details");
    }
    setLoading(false);
  }, [recipeId]); 

  useEffect(() => {
    fetchRecipeDetails();
  }, [fetchRecipeDetails]);

  const handleClose = () => {
    closeModal();
    if (onClose) onClose();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const getIngredients = () => {
    if (!item) return [];
    
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = item[`strIngredient${i}`];
      const measure = item[`strMeasure${i}`];
      
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push({
          ingredient: ingredient.trim(),
          measure: measure ? measure.trim() : "To taste"
        });
      }
    }
    return ingredients;
  };

  const ingredients = getIngredients();

  return (
    <ModalWrapper>
      <Overlay onClick={handleClose} />
      <ModalContainer>
        <Header>
          <CloseButton onClick={handleClose}>
            <MdOutlineClose />
          </CloseButton>
        </Header>

        {loading ? (
          <LoadingState>
            <Circles
              height="60"
              width="60"
              color="#667eea"
              ariaLabel="circles-loading"
              visible={true}
            />
            <LoadingText>Loading recipe details...</LoadingText>
          </LoadingState>
        ) : error ? (
          <ErrorState>
            <ErrorIcon>⚠️</ErrorIcon>
            <ErrorTitle>Unable to Load Recipe</ErrorTitle>
            <ErrorMessage>{error}</ErrorMessage>
            <RetryButton onClick={fetchRecipeDetails}>
              Try Again
            </RetryButton>
          </ErrorState>
        ) : item ? (
          <ModalContent>
            <RecipeHeader>
              <RecipeImage>
                <img src={item.strMealThumb} alt={item.strMeal} />
                <ImageOverlay />
              </RecipeImage>
              <RecipeMeta>
                <RecipeTitle>{item.strMeal}</RecipeTitle>
                <MetaGrid>
                  <MetaItem>
                    <MetaIcon>
                      <MdOutlineCategory />
                    </MetaIcon>
                    <MetaContent>
                      <MetaLabel>Category</MetaLabel>
                      <MetaValue>{item.strCategory}</MetaValue>
                    </MetaContent>
                  </MetaItem>
                  <MetaItem>
                    <MetaIcon>
                      <MdOutlineAddLocation />
                    </MetaIcon>
                    <MetaContent>
                      <MetaLabel>Cuisine</MetaLabel>
                      <MetaValue>{item.strArea}</MetaValue>
                    </MetaContent>
                  </MetaItem>
                  <MetaItem>
                    <MetaIcon>
                      <MdRestaurant />
                    </MetaIcon>
                    <MetaContent>
                      <MetaLabel>Type</MetaLabel>
                      <MetaValue>Main Course</MetaValue>
                    </MetaContent>
                  </MetaItem>
                </MetaGrid>
              </RecipeMeta>
            </RecipeHeader>

            <TabNavigation>
              <TabButton 
                active={activeTab === "instructions"} 
                onClick={() => setActiveTab("instructions")}
              >
                <MdDriveFileRenameOutline />
                Instructions
              </TabButton>
              <TabButton 
                active={activeTab === "ingredients"} 
                onClick={() => setActiveTab("ingredients")}
              >
                <MdLocalBar />
                Ingredients ({ingredients.length})
              </TabButton>
            </TabNavigation>

            <TabContent>
              {activeTab === "instructions" && (
                <InstructionsSection>
                  <SectionTitle>Cooking Instructions</SectionTitle>
                  <InstructionsText>
                    {item.strInstructions.split('\n').map((paragraph, index) => (
                      paragraph.trim() && (
                        <InstructionParagraph key={index}>
                          {paragraph.trim()}
                        </InstructionParagraph>
                      )
                    ))}
                  </InstructionsText>
                </InstructionsSection>
              )}

              {activeTab === "ingredients" && (
                <IngredientsSection>
                  <SectionTitle>Ingredients List</SectionTitle>
                  <IngredientsGrid>
                    {ingredients.map((item, index) => (
                      <IngredientCard key={index}>
                        <IngredientName>{item.ingredient}</IngredientName>
                        <IngredientMeasure>{item.measure}</IngredientMeasure>
                      </IngredientCard>
                    ))}
                  </IngredientsGrid>
                </IngredientsSection>
              )}
            </TabContent>
          </ModalContent>
        ) : null}
      </ModalContainer>
    </ModalWrapper>
  );
};

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
`;

const ModalContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  background: white;
  border-radius: 20px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  animation: ${fadeIn} 0.3s ease-out;
  z-index: 1001;

  @media (max-width: 768px) {
    width: 95%;
    max-height: 95vh;
  }
`;

const Header = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  font-size: 1.25rem;
  color: #2d3436;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: #667eea;
    color: white;
    transform: scale(1.1);
  }
`;

const LoadingState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  gap: 1.5rem;
`;

const LoadingText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: #666;
  font-weight: 500;
`;

const ErrorState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  gap: 1rem;
`;

const ErrorIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const ErrorTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  color: #2d3436;
  margin-bottom: 0.5rem;
`;

const ErrorMessage = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
`;

const RetryButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
  }
`;

const ModalContent = styled.div`
  overflow-y: auto;
  max-height: 90vh;
`;

const RecipeHeader = styled.div`
  position: relative;
`;

const RecipeImage = styled.div`
  position: relative;
  height: 300px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 40%, rgba(0, 0, 0, 0.7));
`;

const RecipeMeta = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  color: white;
`;

const RecipeTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const MetaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const MetaIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  font-size: 1.25rem;
  backdrop-filter: blur(10px);
`;

const MetaContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const MetaLabel = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const MetaValue = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
`;

const TabNavigation = styled.div`
  display: flex;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const TabButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background: transparent;
  border: none;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.active ? '#667eea' : '#666'};
  border-bottom: 3px solid ${props => props.active ? '#667eea' : 'transparent'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #667eea;
    background: rgba(102, 126, 234, 0.05);
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }
`;

const TabContent = styled.div`
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3436;
  margin-bottom: 1.5rem;
`;

const InstructionsSection = styled.div``;

const InstructionsText = styled.div`
  font-family: 'Inter', sans-serif;
  line-height: 1.7;
  color: #555;
`;

const InstructionParagraph = styled.p`
  margin-bottom: 1.5rem;
  animation: ${slideIn} 0.3s ease-out;

  &:last-child {
    margin-bottom: 0;
  }
`;

const IngredientsSection = styled.div``;

const IngredientsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const IngredientCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 10px;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
  animation: ${slideIn} 0.3s ease-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-color: #667eea;
  }
`;

const IngredientName = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  color: #2d3436;
`;

const IngredientMeasure = styled.span`
  font-family: 'Inter', sans-serif;
  color: #667eea;
  font-weight: 500;
  font-size: 0.9rem;
`;

export default RecipeDetailsModal;