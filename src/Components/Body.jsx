import React from 'react'
import About from './HomeComponents/About'
import Footer from './HomeComponents/Footer'
import Search from './HomeComponents/Search'
import styled from 'styled-components'
import CommentsAccordian from './HomeComponents/CommentsAccordian'
import Categories from './HomeComponents/Filters'
import PopularBeefRecipe from './HomeComponents/PopularBeefRecipe'

const Body = () => {
  return (
    <Container>
      <Search />
      <About />
      <Categories/>
      <PopularBeefRecipe/>
      <CommentsAccordian />
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: whitesmoke;
  overflow: hidden;
`


export default Body