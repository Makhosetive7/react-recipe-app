import './App.css';
import Body from './Body'
import BeefPage from './Pages/beef/BeefPage'
import ChickenPage from './Pages/chicken/ChickenPage'
import CockTailPage from './Pages/cocktail/CockTailPage'
import Favorites from './Pages/favorites/Favorites'
import MealRecipeInfo from './Pages/global/MealRecipeInfo'
import DrinkRecipeInfo from './Pages/global/DrinkRecipeInfo'
import Searched from './Pages/global/Searched';
import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/HomeComponents/NavBar';



function App() {
  return (
    <div >
      <NavBar/>
      <Routes>
        <Route path = '/' element = {<Body />} />
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
