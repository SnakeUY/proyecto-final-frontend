import React from "react";
import Card from "../Cards/Card";
import NewPokemonBox from "../New-Pokemon/New-pokemon";
import Pokedex from "../Pokedex/Pokedex";

const PokemonList = ({list, getStoredData,myPokemonsList, showFavorite, setShowFavorite}) =>{

    return(
        <>
            {getStoredData("userToken") ? 
            <>
            <div className="list-container">
                <NewPokemonBox/>
                <Pokedex showFavorite={showFavorite} setShowFavorite={setShowFavorite}/>
                        {
                            list.map((pokemon)=>{
                                if(myPokemonsList){
                                    let isFav = (showFavorite)? myPokemonsList.includes(pokemon.id) : !myPokemonsList.includes(pokemon.id)
                                    
                                    if(isFav === true) return
                                }
                                let pokemonTypeOne = pokemon.idtype_types[0].type
                                return (
                                    <Card key={pokemon.id}
                                    type={`${pokemonTypeOne.toLowerCase()}-border ${pokemonTypeOne.toLowerCase()}-color-txt box`} 
                                    number={`${pokemon.id}`}
                                    pokemon={`${pokemon.pokeurl}`}
                                    title={`${pokemonTypeOne.toLowerCase()} name-box`}
                                    name={`${pokemon.name}`}
                                    />
                                )
                            })
                        }
            </div>
            </>
              :
              <div className="list-container">
             {

                 list.map((pokemon)=>{
                     let pokemonTypeOne = pokemon.idtype_types[0].type
                     return (
                         <Card key={pokemon.id}
                         type={`${pokemonTypeOne.toLowerCase()}-border ${pokemonTypeOne.toLowerCase()}-color-txt box`} 
                         number={`${pokemon.id}`}
                         pokemon={`${pokemon.pokeurl}`}
                         title={`${pokemonTypeOne.toLowerCase()} name-box`}
                         name={`${pokemon.name}`}/>
                     )
                 })
             }
            </div>
            }    
        </>
       
    )
}
export default PokemonList;

