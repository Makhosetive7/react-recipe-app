import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'


import PopulaRecipes from '../Meals/PopularRecipes'

const PopularRecipe = () => {
    const [recipe, setRecipe] = useState([]);
    let navigate = useNavigate()
    useEffect(() => {
        getPopular();
    }, [])

    const getPopular = async() => {

      const Api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
      const data = await Api.json()
      setRecipe(data.meals)
    }


  
  return (
    <Container>
      <h1>Popular Recipes</h1>
      <Splide options={{
        type   : 'loop',
        perPage: 3,
        drag: "free",
        arrows: false,
      }}>
          {recipe &&
            recipe.map((recipes, index) => {
              return(
                <SplideSlide>
                  <Card onClick = {() => (navigate(`/${recipes.idMeal}`))}>
                      <PopulaRecipes
                            key={index}
                            imageurl={recipes.strMealThumb}
                            dish={recipes.strMeal}
                            area={recipes.strArea}
                            category={recipes.strCategory}
                      /> 
                </Card>
              </SplideSlide>
            )
          })
        }
      </Splide>
    </Container>
  )
}

const Container = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;

  h1{
    font-family: 'Shalimar', cursive;
    margin-left: 10rem;
    padding-top: 2rem;
    font-size: 4rem;
  }
`
const Card = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 2fr));
`

export default PopularRecipe

