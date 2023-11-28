import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";


const Filters = () => {
  return (
    <Filter>
      <div className="heading">
        <p>Menu Filter</p>
      </div>
      <main className="contentWrap">
        <nav className="menuWrap" role="navigation">
          <ul id="menu" className="menu">
            <li className="menu-item">
              <NavLink className="links" to="/beefpage">
                <p>Beef_meals</p>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink className="links" to="/cocktailPage">
                <p>Cocktails</p>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink className="links" to ="/chickenpage">
                <p>Chicken_meals</p>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink className="links" to ="Dessertpage">
                <p>Pizza</p>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink className="links" to ="PastaPage">
                <p>Asian_meals</p>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink className="links" to ="SeaFood">
                <p>African_meals</p>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink className="links" to = "Vegetarian">
                <p>European_meals</p>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink className="links" to = "BreakFast">
                <p>BreakFast</p>
              </NavLink>
            </li>          
          </ul>
        </nav>
      </main>
    </Filter>
  );
};
const Filter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 1rem;
  .heading{
    p{
      font-size: 2rem;
      font-family: Rajdhani;
    }
  }

  a {
    text-decoration: none;
    color:  black;
  }

  .contentWrap {
    width: 50vw;
  }
  .menuWrap {
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: normal;
    scrollbar-color: red blue;

    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: red;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-track {
      background-color: #c4b0ff;
    }
  }

  .menu {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    font-family: "Rajdhani", sans-serif;
  }

  .menu-item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2.5rem;
    margin-bottom: 1rem;
    padding: 0.5rem;
    line-height: 0;
    border-radius: 4px;
    border: 1px solid  #c4b0ff;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
      rgb(209, 213, 219) 0px 0px 0px 1px inset;
  }

  .menu-item a {
    display: inline-block;
    color: red;
    font-weight: 500;
  }

  .menu-item:hover,
  .menu-item:focus {
    background: #c4b0ff;
  }
  .links span {
    font-size: 2rem;
  }
  @media (max-width: 1000px) {
    .filter {
      flex-direction: column;
    }

    .filter .searchBar {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 3rem;
      margin-right: 10rem;
    }
  }
`;
export default Filters;
