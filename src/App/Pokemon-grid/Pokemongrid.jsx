import React from "react";
import {useEffect, useState } from 'react'
import Nav from '../Pokemon-Search/Nav';
import PokemonList from '../List/PokemonList';
import { getMyPokemons, getPokemons } from "../../Services/backend-connection";
import { useNavigate } from "react-router-dom"

function PokemonGrid ({logout, login, isLog, setIsLog , getStoredData}){
 
    const [pokemonList,setPokemonList] = useState ([])
    const [myPokemonsList, setMyPokemonsList] = useState([])
    const [pokemonOrder,setPokemonOrder] = useState ("#")
    const [pokemonSearch, setPokemonSearch] = useState ("")
    const navigate = useNavigate()
   
    useEffect(()=>{
      async function fetchData(){
        getPokemons(pokemon=>{
          setPokemonList(pokemon.sort((a, b) => a.id - b.id))
        })
        if(getStoredData("userToken")){
        const token = getStoredData("userToken")
        const email = getStoredData("email")
        getMyPokemons(email,token,pokemon=>{
          let aux = pokemon
          console.log(aux[0])
          setMyPokemonsList(aux[0].pokedex)
          console.log(myPokemonsList)
        },{})
      }
    }
      fetchData()
      console.log(myPokemonsList)
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
        let changedOrder = pokemonList.sort((a, b) => a.id - b.id)
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
                 getStoredData={getStoredData}
                 />
          </div>
          <PokemonList 
              list={pokemonList.filter((pokemon)=>pokemon.name.toLowerCase().includes(pokemonSearch.toLowerCase()))}
            
              getStoredData={getStoredData}
            />
      </>
    );
  }

  export default PokemonGrid