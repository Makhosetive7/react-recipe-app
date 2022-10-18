import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import ChickenCards from './ChickenCards'

const ChickenPage = () => {

    const [chicken, setChicken] = useState([])
    let navigate = useNavigate()

    useEffect(() => {
        getChicken ()
    }, [])

    const getChicken = async() => {
        const API = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken`)
        const data = await API.json()
        console.log(data)
        setChicken(data.meals)
    }

  return (
    <Container>
            {chicken &&
                chicken.map((chickens, index) => {
                return(
                    <div onClick = {() => (navigate(`/${chickens.idMeal}`))}>
                        <ChickenCards
                                key={index}
                                imageurl={chickens.strMealThumb}
                                title ={chickens.strMeal}
                                area={chickens.strArea}
                                category={chickens.strCategory}
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

export default ChickenPage