import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <Container>
        <Salutation>hello <span>&#128075;</span></Salutation>
        <Text>
            <span className='start'>"</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Dignissimos fugiat voluptatum soluta officia accusantium, atque nesciunt qui, <br/> vero fuga quidem mollitia voluptatem officiis placeat, recusandae provident rerum. Iure, neque nostrum.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, molestias natus voluptas earum 
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A, dolore, nobis quidem iste cum deserunt ipsum vero quod, sunt earum impedit! Nostrum sunt aut minima possimus officia vero sapiente itaque.
                    Aliquid eos non ipsam, excepturi voluptatum facere ducimus?
                </p>
            <span className='end'>"</span>
        </Text>
    </Container>
  )
}

const Container = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    font-family: 'Shalimar', cursive;
    font-size: 3rem;
    letter-spacing: 5px;
    width: 100%;
`
const Salutation = styled.h1`
    margin-top: 1rem;
    font-family: 'Play', sans-serif;
    font-size: 10rem;
    color: red;
    span{
        font-size: 5rem;
    }
`
const Text = styled.div`
    display: flex;
    flex-direction: column;
    font-style: italic;
    margin-left: 4rem;
    margin-right: 4rem;

    p{
        margin-top: 1.5rem;
    }
    .start{
        display: flex;
        justify-content: flex-start;
        font-size: 10rem;
        margin-left: 1rem;
        color: red;
    }
    .end{
        display: flex;
        justify-content: flex-end;
        font-size: 10rem;
        margin-right: 1rem;
        color: red;
    }
`
export default About