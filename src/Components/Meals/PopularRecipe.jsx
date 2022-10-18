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
      <Splide options={{
        perPage: 3,
        gap: "1rem",
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
`
const Card = styled.div`
  display: grid;
    place-items: center;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 2fr));
`

export default PopularRecipe

