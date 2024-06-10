import React from "react";
import styled from "styled-components";

const ChickenCards = ({
  imageurl,
  instructions,
  area,
  category,
  dish,
  title,
  id,
  onClick
}) => {
  const handleCardClick = () => {
    onClick(id);
  };
  return (
    <Container>
    <article className="card" onClick={handleCardClick}>
      <div className="image">
        <img src={imageurl} alt="" />
      </div>
      <div className="card__content">
      <p className="note">
          {dish} || {area} meal
        </p>
        <h4>Cooking Instuctions</h4>
        <p>
          {instructions.substring(0, 100)}
        </p>
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
    width: 20rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    background-color: #c4b0ff;
    margin-bottom: 1rem;

    @media screen and (max-width: 800px) {
      margin-bottom: 1rem;
    }


    .card__content {
      padding-left: 1rem;
      padding-right: 1rem;
      font-family: Rajdhani;
      h3 {
        letter-spacing: 2px;
      }
      span {
        color: white;
        font-weight: bold;
        font-style: italic;
        font-size: 10px;
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
        height: 15rem;
        object-fit: cover;
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

export default ChickenCards;
