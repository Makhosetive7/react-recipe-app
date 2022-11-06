import React from 'react'
import About from './HomeComponents/About'
import Footer from './HomeComponents/Footer'
import Navigation from './HomeComponents/Navigation'
import Search from './HomeComponents/Search'
import styled from 'styled-components'
import CommentsAccordian from './HomeComponents/CommentsAccordian'

const Body = () => {
  return (
    <Container>
      <Navigation />
      <Search />
      <About />
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
  border: 5px solid red;
  overflow: hidden;
`


export default Body