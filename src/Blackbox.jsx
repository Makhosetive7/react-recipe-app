import { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'


const RecipeInfo = () => {
    const [details, setDetails] = useState({})
    const {Mealid} = useParams()



    useEffect(() => {

        const fetchDetails = async() =>{
            const mealData = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${Mealid}`)
            const data = await mealData.json()
            console.log(data)
            setDetails(data)
        }



        fetchDetails()
    }, [Mealid])



  return (
    <div> <img src={details.strMealThumb} alt="" /></div>
  )
}

export default RecipeInfo

display: grid;
grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));





 <div className="recipe-details">
                        <div className="ingredients">
                            <h2>Ingredients</h2><br />
                            <h4>{item.strIngredient1}:{item.strMeasure1}</h4>
                            <h4>{item.strIngredient2}:{item.strMeasure2}</h4>
                            <h4>{item.strIngredient3}:{item.strMeasure3}</h4>
                            <h4>{item.strIngredient4}:{item.strMeasure4}</h4>
                            <h4>{item.strIngredient5}:{item.strMeasure5}</h4>
                            <h4>{item.strIngredient6}:{item.strMeasure6}</h4>
                            <h4>{item.strIngredient7}:{item.strMeasure7}</h4>
                            <h4>{item.strIngredient8}:{item.strMeasure8}</h4>
                        </div>
                        <div className="instructions">
                            <h2>Instructions</h2><br />
                            <h4>{item.strInstructions}</h4>
                        </div>
                    </div>