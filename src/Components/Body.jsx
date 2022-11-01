import React from 'react'
import About from './HomeComponents/About'
import PopularRecipe from './HomeComponents/PopularRecipe'
import Footer from './HomeComponents/Footer'
import Navigation from './HomeComponents/Navigation'
import styled from 'styled-components'

const Body = () => {
  return (
    <Container>
      <Navigation />
      <About />
      <PopularRecipe />
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: whitesmoke;
  border: 5px solid red;
  overflow: hidden;
`


export default Body