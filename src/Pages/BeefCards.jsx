import React from 'react'
import styled from 'styled-components'

const BeefCards = ({imageurl, area, category, title}) => {

   

    return (
        <Container>

        <Card>
            <Image src={imageurl} alt="" />

            <HoverDetails>
                <h1> {area} </h1>
                <h2> {title} </h2>
            </HoverDetails>
        </Card>

    </Container>
        
    )
    }


    const Container = styled.div`
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-bottom: 25px;
    margin: 2.5rem;
    font-family: 'Orbitron', sans-serif;
    letter-spacing: 5px;
`

const Card = styled.div`
    position: relative;
`
const HoverDetails = styled.div`
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    color: white;
    font-size: 16px;
    background-color: transparent;
    :hover{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        opacity: 3;
        color: red;
    }
`

const Image = styled.img`
    width: 100%;
    height: 60vh;
`





export default BeefCards