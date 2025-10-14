import React from 'react'
import styled, { keyframes } from 'styled-components'

// Animations
const cardHover = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-8px);
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components
const CardContainer = styled.div`
  animation: ${fadeInUp} 0.6s ease-out;
`;

const CardImage = styled.div`
  position: relative;
  overflow: hidden;
  height: 250px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 60%, rgba(0, 0, 0, 0.7));
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
`;

const RecipeBadge = styled.span`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const CardContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RecipeTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  font-weight: 600;
  color: #2d3436;
  margin: 0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const RecipeDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #666;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`;

const ViewRecipeButton = styled.button`
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;
  width: 100%;
  
  &:hover {
    box-shadow: 0 8px 20px rgba(255, 107, 107, 0.3);
  }
`;

const RecipeCard = styled.article`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.05);
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    animation: ${cardHover} 0.3s ease-out forwards;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    
    ${CardImage} img {
      transform: scale(1.05);
    }
    
    ${ViewRecipeButton} {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      transform: translateY(-2px);
    }
  }
`;

const CockTailCards = ({imageurl, typeOfGlass, title, instructions, category, id, onClick}) => {
  const handleCardClick = () => {
    onClick(id);
  };

  return (
    <CardContainer>
      <RecipeCard onClick={handleCardClick}>
        <CardImage>
          <img src={imageurl} alt={title} />
          <ImageOverlay>
            <RecipeBadge>
              {category} • {typeOfGlass}
            </RecipeBadge>
          </ImageOverlay>
        </CardImage>
        
        <CardContent>
          <RecipeTitle>{title}</RecipeTitle>
          <RecipeDescription>
            {instructions ? instructions.substring(0, 120) + '...' : 'No instructions available'}
          </RecipeDescription>
          <ViewRecipeButton>View Recipe</ViewRecipeButton>
        </CardContent>
      </RecipeCard>
    </CardContainer>
  );
}

export default CockTailCards;