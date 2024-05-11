import './App.css';
import Body from './Body'
import BeefPage from './Pages/beef/BeefPage'
import ChickenPage from './Pages/chicken/ChickenPage'
import CockTailPage from './Pages/cocktail/CockTailPage'
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
      </Routes>


    </div>
  );
}

export default App;
