import './App.css';
import {useEffect, useState} from 'react'
import Nav from './App/Pokemon-Search/Nav';
import PokemonList from './App/List/PokemonList';
import {pokemon}  from './Database/db';
import CardInformation from './App/Cards/Card-information';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getPokemons } from './services/backend-connection';
import Login from './App/Login/login';
import NewPokemonForm from './App/New-Pokemon/New-pokemon-form';

function PokemonGrid ({logout, login, isLog , getStoredToken}){
 
  const [pokemonList,setPokemonList] = useState ([])
  const [pokemonOrder,setPokemonOrder] = useState ("#")
  const [pokemonSearch, setPokemonSearch] = useState ("")
 
  useEffect(()=>{

    async function fetchData(){
      getPokemons(pokemon=>{
        setPokemonList(pokemon)
      })
      getStoredToken()
    }
    fetchData()
  },[])

  const changeOrder = () =>{
    if (pokemonOrder === "#"){
     let changedOrder = pokemonList.sort((a, b) => {
        if (a.name > b.name) return 1
        if (a.name < b.name) return -1
        return 0
      })
      setPokemonList(changedOrder)
      setPokemonOrder("AZ")
    }
    else{
      let changedOrder = pokemonList.sort((a, b) => a.id -b.id)
      setPokemonList(changedOrder)
      setPokemonOrder("#")
    }
  }


  return (
    <>
        <div className='app-navbar'>
          <Nav pokemonOrder={pokemonOrder}
               changeOrder={changeOrder}
               pokemonSearch={pokemonSearch}
               search={setPokemonSearch}
               logout={logout}
               login={login}
               isLog={isLog}
               getStoredToken={getStoredToken}
               />
        </div>
        <PokemonList 
            list={pokemonList.filter((pokemon)=>pokemon.name.toLowerCase().includes(pokemonSearch.toLowerCase()))}
          
            getStoredToken={getStoredToken}
          />
    </>
  );
}

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
            <Route path='/addpokemon' element={<NewPokemonForm getStoredToken={getStoredToken}/>} />
          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App;
