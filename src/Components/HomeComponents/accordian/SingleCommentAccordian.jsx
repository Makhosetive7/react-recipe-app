import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { MdArrowDownward,MdArrowUpward  } from "react-icons/md";

const SingleCommentAccordian = ({ title, content, image }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Container>
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className="user">
          <p>{title}</p>
          <img src={image} alt="/" />
        </div>
        <div>
          {isActive ? <MdArrowUpward  /> : <MdArrowDownward />}
        </div>
      </div>

      {isActive && (
        <div className="accordion-content">
          <p>{content}</p>
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  font-family: "Rajdhani", sans-serif;

  .accordion-title {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 5rem;
    font-size: 1.5rem;
    cursor: pointer;
    color:  #c4b0ff;

    .user {
      display: flex;
      justify-content: center;
      align-items: center;
      p{
        font-weight: 300;
        padding-right: 1rem;
      }

      img {
        width: 3rem;
        height: 3rem;
        border: 1px solid black;
        border-radius: 50%;
      }
    }
  }
  .accordion-content {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
  }
  p {
    font-size: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-family: "Rajdhani", sans-serif;
  }
`;
export default SingleCommentAccordian;
