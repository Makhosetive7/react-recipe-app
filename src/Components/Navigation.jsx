import React from 'react'
import styled from 'styled-components'

import {FaHamburger} from 'react-icons/fa';

const Navigation = () => {


    const style = { 
    
        color: "whitesmoke",
        fontSize: "4rem",
        margin: "2rem",
    }

  return (
    <Container>
        <Humburger>
            <FaHamburger style={style} />
        </Humburger>
        <Profile>
            <Links href="/">Profile</Links>
        </Profile>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: red;
    height: 10vh;

`
const Humburger = styled.div`
    margin: 2rem;
`
const Profile = styled.div`
    margin: 2rem;
    font-size: 1.5rem;
    border: 1px solid whitesmoke;


`
const Links = styled.a`
    padding: 2rem;
    text-decoration: none;
`

export default Navigation