import React from 'react'
import styled from 'styled-components'



const PopularRecipes = ({imageurl, dish, area, category}) => {




  return (
    <Container>
        <TopInformation>
            <Btn>Cooking Instructions || Recipe</Btn>
        </TopInformation>

        <CenterInformation>
            <Image src={imageurl} alt="" />
        </CenterInformation>

        <BottomInformation>
            <h1>{dish}</h1>
            <h2> {area}    ||   {category} </h2>
        </BottomInformation>
    </Container>
  )
}

const Container = styled.div`
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 2.5rem;
`
const TopInformation = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 10vh;
    font-family: 'Abril Fatface', cursive;
    letter-spacing: 4px;
    word-spacing: 5px;
    padding-bottom: 1rem;
`
const CenterInformation = styled.div`


`


const Image = styled.img`
    width: 100%;
    height: 30vh;
`

const BottomInformation = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1{
        font-family: 'Shalimar', cursive;
        font-size: 2.5rem;
        letter-spacing: 10px;
    }
`


const Btn = styled.button`
    background-color: whitesmoke;
    color: red;
    font-size: 16px;
    font-family: 'Play', sans-serif;
    padding: 16px 32px;
    word-spacing: 6px;
    letter-spacing: 3px;
    border: 1px solid black;
    margin-top: 1.5rem;
    margin-right: 1rem;
    margin-left: 1rem;
    :hover{
        background-color: black;
        border: 2px solid plum;
    }
`



export default PopularRecipes