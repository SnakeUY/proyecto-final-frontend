import './App.css';
import { useState} from 'react'
import CardInformation from './App/Cards/Card-information';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './App/Login/login';
import NewPokemonForm from './App/New-Pokemon/New-pokemon-form';
import PokemonGrid from './App/Pokemon-grid/Pokemongrid';

function App() {

  const [isLog, setIsLog] = useState(false)
  const [myPokes, setMyPokes] = useState(false)
  const [showFavorite, setShowFavorite] = useState(false)
  const [myPokemonsList, setMyPokemonsList] = useState()
  const getStoredData = (data) => {
    return localStorage.getItem(data)
  }

  const login = (token,email,name,money) => {
    setIsLog(true)
    localStorage.setItem("userToken", token)
    localStorage.setItem("email", email)
    localStorage.setItem("name", name)
    localStorage.setItem("money", money)
    return isLog
  }

  const logout = async () => {
    setIsLog(false)
    localStorage.removeItem("userToken") 
    localStorage.removeItem("email") 
    localStorage.removeItem("name")
    localStorage.removeItem("money") 
    return isLog
  }
  
  return(
    <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<PokemonGrid myPokemonsList={myPokemonsList} setMyPokemonsList={setMyPokemonsList} setIsLog={setIsLog} getStoredData={getStoredData} logout={logout} login={login} isLog={isLog} myPokes={myPokes} setMyPokes={setMyPokes} showFavorite={showFavorite} setShowFavorite={setShowFavorite}/>} />
            <Route path='/:id' element={<CardInformation myPokemonsList={myPokemonsList} setMyPokemonsList={setMyPokemonsList} getStoredData={getStoredData} showFavorite={showFavorite}/>} />
            <Route path='/login' element={<Login login={login} isLog={isLog} />} />
            <Route path='/addpokemon' element={<NewPokemonForm getStoredData={getStoredData} />} />
          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App;
