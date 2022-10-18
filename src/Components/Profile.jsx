import React from 'react'
import styled from 'styled-components'

import { AiOutlineLogout } from 'react-icons/ai';

const   Profile = () => {


    const image = {
        img:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    }

    return (
    <Container>
        <ProfileDetails>
            <ImageContainer>
                <Image src={image.img} alt="/" />
            </ImageContainer>
            <DetailsContainer>
                <Name>Name: John Doe</Name>
                <Field>Trade: Food & Catering</Field>
                <Id>ID: 56 - 2045791 G 56</Id>
            </DetailsContainer>
        </ProfileDetails>
            
            <Btn>
                LogOut <AiOutlineLogout />
            </Btn>
    </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`
const ProfileDetails = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;

`
const ImageContainer = styled.div`
    margin-top: 1rem;
    width: 8vw;
    

`
const Image = styled.img`
width: 100%;

`
const DetailsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
    margin: 1rem;
`
const Field = styled.h1`
    font-size: 1.2rem;
    padding: 1rem;
`
const Name = styled.h1`
    font-size: 1.5rem;
    padding: 1rem;
`
const Id = styled.h1`
    font-size: 1.2rem;
    padding: 1rem;
`
const Btn = styled.button`
    width: 10rem;
    height: 2.5rem;
    border: 1px solid red;
    font-family: 'Rajdhani', sans-serif;
    font-size: 1.3rem;
    margin-bottom: 4rem;


`

export default Profile