import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import styled from 'styled-components'


import PopulaRecipes from '../HomeComponents/PopularRecipes'

const PopularRecipe = () => {
    const [recipe, setRecipe] = useState([]);
    let navigate = useNavigate()
    useEffect(() => {
        getPopular();
    }, [])

    const getPopular = async() => {

      const Api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Tunisian`)
      const data = await Api.json()
      console.log(data)
      setRecipe(data.meals)
    }


  
  return (
    <Container> 
          {recipe &&
            recipe.map((recipes, index) => {
              return(
                  <div onClick = {() => (navigate(`/${recipes.idMeal}`))}>
                      <PopulaRecipes
                            key={index}
                            imageurl={recipes.strMealThumb}
                            dish={recipes.strMeal}
                            area={recipes.strArea}
                            category={recipes.strCategory}
                      /> 
                </div>
            )
          })
        }
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
`

export default PopularRecipe

