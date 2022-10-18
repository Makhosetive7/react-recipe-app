import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import BeefCards from './BeefCards'

const BeefPage = () => {

    const [beef, setBeef] = useState([])
    let navigate = useNavigate()

    useEffect(() => {
        getBeef ()
    }, [])

    const getBeef = async() => {
        const API = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Beef`)
        const data = await API.json()
        console.log(data)
        setBeef(data.meals)
    }

  return (
    <Container>
            {beef &&
                beef.map((beefs) => {
                return(
                    <div onClick = {() => (navigate(`/${beefs.idMeal}`))}>
                        <BeefCards
                                    key={beefs.idMeal}
                                    imageurl={beefs.strMealThumb}
                                    title ={beefs.strMeal}
                                    area={beefs.strArea}
                                    category={beefs.strCategory}
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


export default BeefPage