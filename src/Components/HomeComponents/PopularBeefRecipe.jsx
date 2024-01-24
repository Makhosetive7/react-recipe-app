import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import PopularBeefRecipes from './PopularBeefRecipes'

const PopularBeefRecipe = () => {
    const [recipe, setRecipe] = useState([]);
    let navigate = useNavigate()

    
    useEffect(() => {
        getPopular();
    }, [])

    const getPopular = async () => {
      const Api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Beef`);
      const data = await Api.json();
      console.log(data)
      setRecipe(data.meals.slice(0, 3)); // Limit to six meals
    };


  
  return (
    <Container> 
      <div className='heading'>
        <p>Random Pupolar Beef Meals</p>
      </div>
          <div className='mapping_recipes'>
          {recipe &&
            recipe.map((recipes, index) => {
              return(
                  <div onClick = {() => (navigate(`/${recipes.idMeal}`))}>
                      <PopularBeefRecipes
                            key={index}
                            imageurl={recipes.strMealThumb}
                            dish={recipes.strMeal}
                            area={recipes.strArea}
                            category={recipes.strCategory}
                            instructions ={recipes.strInstructions}
                      /> 
                </div>
            )
          })
        }
          </div>
    </Container>
  )
}

const Container = styled.div`
display: flex;
flex-direction: column;

.heading{
  p{
  font-size: 2rem;
  border-top: 1px solid black ;
  border-bottom: 1px solid black;
  padding: 1rem;
  font-family: Rajdhani;
}
}
.mapping_recipes{
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 900px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px){
    grid-template-columns: repeat(1, 1fr);
  }

}
`

export default PopularBeefRecipe

