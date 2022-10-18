import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import styled from 'styled-components'

import PopularCocktails from './PopularCocktails';




const PopularCocktail = () => {

  const [cocktails, setcocktails] = useState([])
  let navigate = useNavigate()

    useEffect(() => {
        getPopularCoctails ()
    }, [])

    const getPopularCoctails = async() => {
        const API = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
        const data = await API.json()
        console.log(data)
        setcocktails(data.drinks)
    }






  return (
    <Container>
      <Splide options={{
        perPage: 3,
        gap: "1rem",
        drag: "free",
        arrows: false,
      }}>
          {cocktails &&
            cocktails.map((cocktail, index) => {
              return(
                <SplideSlide>
                  <div onClick = {() => (navigate(`/${cocktail.idDrink}`))}>
                      <PopularCocktails
                            key={index}
                            imageurl={cocktail.strDrinkThumb}
                            alcoholic={cocktail.strAlcoholic}
                            title ={cocktail.strDrink}
                            typeOfGlass={cocktail.strGlass}
                            category={cocktail.strCategory}
                      /> 
                </div>
              </SplideSlide>
            )
          })
        }
      </Splide>
    </Container>
  )
}

const Container = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 3rem;
`

export default PopularCocktail