import React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import CockTailCards from './CockTailCards'


const CockTailPage = () => {

    const [alcoholic, setAlcoholic] = useState([])

    useEffect(() => {
        getAlcoholic ()
    }, [])

    const getAlcoholic = async() => {
        const API = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
        const data = await API.json()
        console.log(data)
        setAlcoholic(data.drinks)
    }

  return (
    <Container>
            {alcoholic &&
                alcoholic.map((cocktail, index) => {
                return(
                    <div>
                        <CockTailCards
                            key={index}
                            imageurl={cocktail.strDrinkThumb}
                            title ={cocktail.strDrink}
                            typeOfGlass={cocktail.strGlass}
                            category={cocktail.strCategory}
                        /> 
                    </div>
                )
            })
        }
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 3rem;
`

export default CockTailPage