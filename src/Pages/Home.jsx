import React from 'react'
import Body from '../Components/Body'
import Navigation from '../Components/Navigation'





import styled from 'styled-components'

const Home = () => {
    
  return (
    <Container>
        <Navigation />
        <Body />
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: whitesmoke;
`



export default Home 