import './App.css';
import Body from './Components/Body'
import BeefPage from './Pages/BeefPage'
import ChickenPage from './Pages/ChickenPage'
import CockTailPage from './Pages/CockTailPage'
import Favorites from './Pages/Favorites'
import MealRecipeInfo from './Pages/MealRecipeInfo'
import DrinkRecipeInfo from './Pages/DrinkRecipeInfo'
import Searched from './Pages/Searched';
import LogIn from './Pages/LogIn';
import { Routes, Route } from 'react-router-dom'



function App() {



  return (
    <div >
      <Routes>
        <Route path='/' element = {<LogIn/> } />
        <Route path = '/body' element = {<Body />} />
        <Route path = '/beefPage' element = {<BeefPage />} />
        <Route path = '/chickenpage' element ={<ChickenPage />} />
        <Route path = '/cocktailPage' element ={<CockTailPage/>} />
        <Route path = '/favorites' element ={<Favorites/>} />
        <Route exact path="/:mealrecipeId" element={<MealRecipeInfo/>}/>
        <Route exact path="/:drinkrecipeId" element={<DrinkRecipeInfo/>} />
        <Route path ='/searched/ :search' element={<Searched />}  />
      </Routes>


    </div>
  );
}

export default App;
