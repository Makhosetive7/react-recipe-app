import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Searched = () => {

  const [searchedRecipes, setSearchedRecipes] = useState([])
  const Params = useParams




  const getSearched = async() => {
    const Api = await fetch(`http://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`)
    const data = await Api.json
    console.log(data)
    setSearchedRecipes(data.meals)
  }
  useEffect (() => {
    getSearched(Params.search)
  }, [Params.search])
  
  return (
    <div>
      <p>hello</p>
      {searchedRecipes}
    </div>
  )
}

export default Searched
