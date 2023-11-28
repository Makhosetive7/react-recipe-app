import React from "react";
import styled from "styled-components";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
const PopularBeefRecipes = ({
  imageurl,
  dish,
  area,
  category,
  instructions,
}) => {
  return (
    <Container>
      <article class="card">
        <div class="image">
          <img src={imageurl} alt="" />
          <p class="note">{dish} || {area} meal</p>
        </div>
        <div class="card__content">
          <h3>Cooking Instuctions</h3>
          <p>
            {instructions.substring(0, 500)}
            <span>....read more</span>
          </p>
          <h3 class="label">Share meal on:</h3>
          <div className="media">
            <ul>
              <li>
                <FiTwitter />
              </li>
              <li>
                <AiOutlineWhatsApp />
              </li>
              <li>
                <FaInstagram />
              </li>
            </ul>
          </div>
        </div>
      </article>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  article {
    width: 25vw;
    border: 1px solid pink;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    background-color: #c4b0ff;

    .card__content {
      padding-left: 1rem;
      padding-right: 1rem;
      font-family: Rajdhani;
      h3{
        letter-spacing: 2px;
      }
      span{
        color: white;
        font-weight: bold;
        font-style: italic;
      }
    }

    .media {
      ul {
        list-style: none;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
    }
    .image {
      img {
        width: 100%;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
      }
      p {
        font-family: Rajdhani;
        font-size: 20px;
        padding-left: 1rem;
        color: white;
        font-weight: bold;
      }
    }
  }
`;

export default PopularBeefRecipes;
