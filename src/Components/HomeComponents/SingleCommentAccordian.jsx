import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const SingleCommentAccordian = ({ title, content,image }) => {

    const [isActive, setIsActive] = useState(false)


  return (
    <Container>
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className='title'>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && 
        <div className="accordion-content">
            <img src={image} alt="/" />
            <p>{content}</p>
        </div>}
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    font-family: 'Orbitron', sans-serif;

    .accordion-title{
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 5rem;
        font-size: 1.5rem;
        cursor: crosshair;
        color: red;
    }
    .accordion-content{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        padding: 3rem;
    }
    img{
        width: 10%;
        height: 15vh;
        border: 1px solid black;
        border-radius: 50%;
        margin-bottom: 1rem;
    }
    p{
        font-size: 1.3rem;
        font-family: 'Rajdhani', sans-serif;

    }
`
export default SingleCommentAccordian
