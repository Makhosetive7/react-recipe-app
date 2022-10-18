import './App.css';
import Home from './Pages/Home'
import BeefPage from './Pages/BeefPage'
import ChickenPage from './Pages/ChickenPage'
import CockTailPage from './Pages/CockTailPage'
import Favorites from './Pages/Favorites'
import MealRecipeInfo from './Pages/MealRecipeInfo'
import DrinkRecipeInfo from './Pages/DrinkRecipeInfo'
import { Routes, Route } from 'react-router-dom'


function App() {



  return (
    <div >
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/beefPage' element = {<BeefPage />} />
        <Route path = '/chickenpage' element ={<ChickenPage />} />
        <Route path = '/cocktailPage' element ={<CockTailPage/>} />
        <Route path = '/favorites' element ={<Favorites/>} />
        <Route exact path="/:mealrecipeId" element={<MealRecipeInfo/>}/>
        <Route exact path="/:drinkrecipeId" element={<DrinkRecipeInfo/>} />
      </Routes>


    </div>
  );
}

export default App;
