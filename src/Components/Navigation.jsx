import React, { useState } from "react";
import styled from 'styled-components'

import { device } from "./device";

import { GiWheat } from 'react-icons/gi';
import { FaHamburger } from 'react-icons/fa';
import { BsEggFried } from 'react-icons/bs';
import { BsEmojiHeartEyes } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';

import { NavLink } from 'react-router-dom'


const Navigation = () => {


    const [showMenu, setShowMenu] = useState(false);

    const styles = {
        
        border: "3px solid red",
        padding: "1rem",
        margin: "1.5rem",
        fontSize: "2rem",
        color: "red"
    }


    return (
        <Container>
            <nav className={`navbar`}>
                {/* navbar buttons */}
                <ul className={`nav-menu ${showMenu && "active"}`}>
                    <li><NavLink to="/beefPage"> <FaHamburger style = {styles} /></NavLink>Beef Meals</li>
                    <li><NavLink to="/chickenpage">  <BsEggFried style = {styles}/> </NavLink>Chicken Meals</li>
                    <li><NavLink to="/cocktailpage"> <GiWheat style = {styles}/> </NavLink>Cocktails</li>
                    <li><NavLink to="/favorites"> <BsEmojiHeartEyes style = {styles}/> </NavLink>Favorites</li>
                </ul>

                {/* hamburger menu */}
                <Btn onClick={() => setShowMenu(!showMenu)}>
                    {showMenu ? (<FaTimes className="icons"/>) : (<GiHamburgerMenu className="icons"/>)}
                </Btn>
            </nav>
            
        </Container>
    )
    }

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: red;
    height: 10vh;

    .nav-menu {
        position: absolute;
        left: -110%;
        top: 8rem;
        flex-direction: column;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        width: 10vw;
        height: 70%;
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);

        @media ${device.mobileS} {
             width: 15rem;   
         }
}

        .nav-menu.active {
            left: 0;
        }

        ul{
            display: flex;
            justify-content: center;
            align-items: center;
            list-style: none;
            padding-bottom: 2.5rem;
            padding-top: 2.5rem;

        }
        li{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            font-size: 1.5rem;
            padding-bottom: 2rem;
            border-bottom: 1px solid black;
        }


`
const Btn = styled.button`
    margin-left: 2rem;

    .icons{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3rem;
    }
`




export default Navigation