import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'


const Search = () => {

  const [activeTab, setActiveTab] = useState('Instructions')

  return (
    <Container>
      <div>
        <button className={activeTab === 'Meals' ? 'active' : ''} onClick={() => setActiveTab('Meals')} >Meals <span>&#127834;</span></button>
         <button className={activeTab === 'Cocktails' ? 'active' : ''} onClick={() => setActiveTab('Cocktails')}>Cocktails <span>&#127865;</span></button>
      </div>

      <div>
        {activeTab === 'Meals' && (
          <div >
            <input 
              type="text" 
              placeholder='search meals '
            />
          </div>
        ) }
            {activeTab === 'Cocktails' && (
          <div >
            <input 
              type="text" 
              placeholder='search Cocktails '
            />
          </div>
        )}
      </div>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    padding-top: 2rem;
    padding-bottom: 2rem;

    button{
      width: 13rem;
      height: 3rem;
      font-size: 1.3rem;
      border: 1px solid red;
      margin-right: 2rem;
      margin-bottom: 5rem;
      background-color: whitesmoke;
      font-family: 'Orbitron', sans-serif;
      color: red;
    }
    .active{
        background-color: red;
        color: black;
    }
    input{
      width: 40vw;
      height: 3rem;
      border: 1px solid red;
      
    }

`

export default Search
