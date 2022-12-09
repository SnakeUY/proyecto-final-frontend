import React from "react";
import Card from "../Cards/Card";
import NewPokemonBox from "../New-Pokemon/New-pokemon";

const PokemonList = ({list}) =>{
    return(
        <div className="list-container">
            <NewPokemonBox/>
            {
                list.map((pokemon)=>{
                    let pokemonTypeOne = pokemon.idtype_types[0].type
                    return (
                        <Card key={pokemon.id}
                        type={`${pokemonTypeOne.toLowerCase()}-border ${pokemonTypeOne.toLowerCase()}-color-txt box`} 
                        number={`${pokemon.id}`}
                        pokemon={`./Imagenes/${pokemon.name.toLowerCase()}.png`}
                        title={`${pokemonTypeOne.toLowerCase()} name-box`}
                        name={`${pokemon.name}`}/>
                    )
                })
            }
        </div>
    )
}
export default PokemonList;

