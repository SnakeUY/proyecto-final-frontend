import './App.css';
import {useEffect, useState} from 'react'
import CardInformation from './App/Cards/Card-information';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './App/Login/login';
import NewPokemonForm from './App/New-Pokemon/New-pokemon-form';
import PokemonGrid from './App/Pokemon-grid/Pokemongrid';



function App() {

  const [isLog, setIsLog] = useState(false)
  
  const getStoredToken = () => {
    return localStorage.getItem("userToken")
  }

  const login = (token) => {
    setIsLog(true)
    localStorage.setItem("userToken", token)
    return isLog
  }
  const logout = async () => {
    setIsLog(false)
    localStorage.removeItem("userToken") 
    return isLog
  }

  // Al final no lo use
  const sendToken = async (url) => {
    const token = getStoredToken()
    console.log(token)
    const requestOptions = {
        headers: { "auth-token": token },
      };
     
      return requestOptions
  }
  
  return(
    <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<PokemonGrid getStoredToken={getStoredToken} logout={logout} login={login} isLog={isLog}  />} />
            <Route path='/:id' element={<CardInformation />} />
            <Route path='/login' element={<Login login={login} isLog={isLog} />} />
            <Route path='/addpokemon' element={<NewPokemonForm />} />
          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App;
