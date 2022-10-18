import React from 'react'
import styled from 'styled-components'

const Banner = () => {
  return (
    <Container>
        <Department>School of Hospitality and Tourism</Department>
        <Title>Food Recipe and Instruction, Baverage API </Title>

    </Container>
  )
}


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 70vh;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    background-image: url("https://vacancymail.s3.amazonaws.com/media/logo_bulawayo-polytechnic_14512.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 50% 50%;
    background-color: white;
`
const Department = styled.h1`
    font-family: 'Play', sans-serif;
    font-size: 4rem;
    letter-spacing: 10px;

`
const Title = styled.h1`
font-family: 'Play', sans-serif;
font-size: 2rem;
letter-spacing: 10px;

`
export default Banner