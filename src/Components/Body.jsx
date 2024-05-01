import React from 'react'
import Footer from './HomeComponents/Footer'
import styled from 'styled-components'
import CommentsAccordian from './HomeComponents/CommentsAccordian'
import PopularBeefRecipe from './HomeComponents/PopularBeefRecipe'
import Banner from './HomeComponents/Banner'
import About from './HomeComponents/About'

const Body = () => {
  return (
    <Container>
      {/*<Search />*/}
      <Banner/>
      <About/>
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