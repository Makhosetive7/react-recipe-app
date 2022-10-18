import React from 'react'

import styled from 'styled-components'
import { GiWheat } from 'react-icons/gi';
import { FaHamburger } from 'react-icons/fa';
import { BsEggFried } from 'react-icons/bs';
import { MdOutlineFoodBank } from 'react-icons/md';

import { NavLink } from 'react-router-dom'



const NavBar = () => {

    const styles = {
        
        border: "3px solid red",
        padding: "1rem",
        margin: "1.5rem",
        fontSize: "4rem",
    }






return (
    <Container>
        <CategoryLinks>
            <NavLink to="/beefPage"> <FaHamburger style = {styles} /> </NavLink>
            <NavLink to="/chickenpage">  <BsEggFried style = {styles}/> </NavLink>
            <NavLink to="/cocktailpage"> <GiWheat style = {styles}/> </NavLink>
            <NavLink to="/favorites"> <MdOutlineFoodBank style = {styles}/> </NavLink>
        </CategoryLinks>

        
        
    </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100;
`

const CategoryLinks = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
    margin: 2rem;
    position: fixed;
`



export default NavBar
