import React from 'react'
import PopularRecipe from '../Components/Meals/PopularRecipe'
import PopularCocktail from './Meals/PopularCocktail'
import Banner from './Banner'
import styled from 'styled-components'

const Body = () => {
  return (
    <Container>
      <PopularRecipe />
      <Banner />
      <PopularCocktail />
    </Container>
  )
}

const Container = styled.div`
  border: 5px solid red;
  overflow: hidden;
`


export default Body