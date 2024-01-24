import React from 'react'
import styled from 'styled-components'
const Logo = () => {
  return (
    <Container>
        <h1>
            Home <span>OF</span> Recipes
        </h1>
    </Container>
      
  )
}

const Container = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
height: 80px;
width: 100%;
background-color: white;
h1{
    font-size: 1.5rem;
    color: red;
    padding-left: 2rem;
    font-family: "Rajdhani", sans-serif;

    span{
        color: #c4b0ff;
    }
}
`
export default Logo
