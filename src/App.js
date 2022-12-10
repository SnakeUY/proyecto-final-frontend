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

function PokemonGrid (){
  const [pokemonList,setPokemonList] = useState ([])
  const [pokemonOrder,setPokemonOrder] = useState ("#")
  const [pokemonSearch, setPokemonSearch] = useState ("")
  useEffect(()=>{
    async function fetchData(){
      getPokemons(pokemon=>{
        setPokemonList(pokemon)
        console.log(pokemon)
      })
      console.log(pokemonList)
    }
    fetchData()
  },[]
  )
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
               search={setPokemonSearch}/>
        </div>
        <PokemonList 
            list={pokemonList.filter((pokemon)=>pokemon.name.toLowerCase().includes(pokemonSearch.toLowerCase()))}/>
    </>
  );
}

function App() {
  return(
    <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/addpokemon' element={<NewPokemonForm
            />} />
            <Route path='/' element={<PokemonGrid/>}
            />
            <Route path='/:id' element={<CardInformation 
            
            />}/>
          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App;
