import React from 'react'
import styled from 'styled-components'
import { device } from "./device";

import { TbArrowBottomCircle } from 'react-icons/tb';


const Banner = () => {

  const style = { 
    height: "10rem"
}

  return (
    <Container>
        <Heading>Helping you prepare the best meal</Heading>
        <Icon> <TbArrowBottomCircle  style ={style}/> </Icon>

    </Container>
  )
}


const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    height: 70vh;
    box-shadow: 0 4px 8px 0 rgba(86, 86, 86, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    background-image: url("https://images.pexels.com/photos/952479/pexels-photo-952479.jpeg?cs=srgb&dl=pexels-lukas-952479.jpg&fm=jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size:cover;
    object-fit: cover;
    background-color: white;
`
const Heading = styled.h1`
    font-family: 'Shalimar', cursive;
    font-size: 4rem;
    letter-spacing: 10px;
    color: whitesmoke;

    @media ${device.mobileS} {
    padding-left: 3rem;
    padding-right: 2rem;
    font-size: 3rem;
    padding-bottom: 3rem;
   
  }

    @media ${device.mobileM} {
    padding-left: 3rem;
    padding-right: 2rem;
    font-size: 3rem;
   
  }

`
const Icon = styled.h1`
font-size: 4rem;
color: red;




`
export default Banner