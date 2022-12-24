import React from "react";
import {useEffect, useState } from 'react'
import Nav from '../Pokemon-Search/Nav';
import PokemonList from '../List/PokemonList';
import { getMyPokemons, getPokemons } from "../../services/backend-connection";
import { useNavigate } from "react-router-dom"

function PokemonGrid ({myPokemonsList,setMyPokemonsList,logout, login, isLog, setIsLog , getStoredData, showFavorite, setShowFavorite, sendToken, error}){
 
    const [pokemonList,setPokemonList] = useState ([])
    const [pokemonOrder,setPokemonOrder] = useState ("#")
    const [pokemonSearch, setPokemonSearch] = useState ("")
    const navigate = useNavigate()

  
    const fetchData = async () =>{
      await getPokemons()
      .then((pokemon)=>{
        setPokemonList(pokemon.sort((a, b) => a.id - b.id))
      })
      
      if(getStoredData("userToken")){
      const token = getStoredData("userToken")
      const email = getStoredData("email")
      let aux
      await getMyPokemons(email,token)
      .then((pokemon)=> {
        aux = pokemon[0].idpokemon_pokemons
        
        let myFavArr = []
        aux.map((poke)=>{
            myFavArr.push(poke.id)
        })
        setMyPokemonsList(myFavArr)
      })
    }
  }

const checkStatusToken = async () =>{
  if(getStoredData("userToken")){
    await sendToken()
    console.log(error)
    if(error === "401"){
      logout()
      navigate('/')
    }
}
}

  useEffect(()=>{
    fetchData()
    checkStatusToken()
  },[])

  useEffect(()=>{
    checkStatusToken()
  },[error])

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
              myPokemonsList={myPokemonsList}
              getStoredData={getStoredData}
              showFavorite={showFavorite} 
              setShowFavorite={setShowFavorite}
            />
      </>
    );
  }

  export default PokemonGrid