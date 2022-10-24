import React from 'react'
import styled from 'styled-components'
import { GrFavorite } from 'react-icons/gr';

const BeefCards = ({imageurl, area, category, title}) => {

  const style = { 
    backgroundColor: "whitesmoke" ,
    color: "red",
    padding: "2rem",
    margin: "1rem",
    width: "2rem",
    border: "4px solid black",
}


  return (
    <Container>
        <TopInformation>
            <Btn>Instructions || Recipes</Btn>
        </TopInformation>

        <CenterInformation>
            <Image src={imageurl} alt="" />

            <HoverDetails>
                <GrFavorite style={style}  /> 
            </HoverDetails>
        </CenterInformation>

        <BottomInformation>
            <h1>{title}</h1>
            <h2> {area}    ||   {category} </h2>
        </BottomInformation>
    </Container>
    
  )
}

const Container = styled.div`
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-bottom: 25px;
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
    position: relative;
`
const HoverDetails = styled.div`
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    color: white;
    font-size: 16px;
    padding: 16px 32px;
    :hover{
        opacity: 1;
    }
`


const Image = styled.img`
    opacity: 1;
    display: block;
    width: 100%;
    height: 30vh;
    transition: .5s ease;
    backface-visibility: hidden;
    :hover{
        opacity: 0.3;
    }
`

const BottomInformation = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 10vh;
    padding-bottom: 2rem;
    
    h1{
        font-family: 'Shalimar', cursive;
        font-size: 3rem;
        padding-top: 1rem;
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



export default BeefCards