import React from 'react'
import PopularRecipe from '../Components/Meals/PopularRecipe'
import PopularCocktail from './Meals/PopularCocktail'
import Banner from './Banner'
import styled from 'styled-components'

const Body = () => {
  return (
    <Container>
      <Banner />

      <Popular>
        <PopularRecipe />
        <PopularCocktail />
      </Popular>
      
    </Container>
  )
}

const Container = styled.div`
  border: 5px solid red;
  overflow: hidden;
`
const Popular = styled.div`
  margin-top: 2.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: white;

`


export default Body