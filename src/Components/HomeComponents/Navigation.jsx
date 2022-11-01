import React, { useState } from "react";
import styled from 'styled-components'
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
                <ul className={`nav-menu ${showMenu && "active"}`}>
                    <li><NavLink to="/beefPage" className='links'> Beef Meals <span>&#127830;</span> </NavLink></li>
                    <li><NavLink to="/chickenpage" className='links'> Chicken Meals<span>&#127831;</span>  </NavLink></li>
                    <li><NavLink to="/cocktailpage" className='links'> Cocktails<span>&#129346;</span> </NavLink> </li>
                    <li><NavLink to="/favorites" className='links'> Favorites <span>&#128159;</span> </NavLink></li>
                </ul>

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
    height: 10vh;
    .nav-menu {
        position: absolute;
        left: -110%;
        top: 8rem;
        flex-direction: column;
        background: hsla(0, 0%, 100%, 0.2);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        width: 100%;
        height: 100%;
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);

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
            span{
                font-size: 5rem;
    
            }
        }
        li{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2.5rem;
            padding-bottom: 2rem;
            border-bottom: 1px solid red;

            .links{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column-reverse;
                text-decoration: none;
                color: red;
            }
        }
`
const Btn = styled.button`
    border: 2px solid red;
    margin-left: 2rem;
    .icons{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3rem;
        color: red;
    }
`




export default Navigation