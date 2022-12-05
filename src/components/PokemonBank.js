import React from "react";
import { Link } from "react-router-dom";
import {getHexType,addLeadingZeros,capitalizeFirstLetter} from "../services/auxiliar";
import { Loading } from "./Lib";
const FilterPokemons = ({pokemon,select,cantidadpokemon}) =>{
    return(
    
        <div className="container marginsPokemons">
        {
            pokemon.map((poke)=>{
            const numero= addLeadingZeros(poke.id,3);
            return <PokemonBank pokemon={poke} select={select} numero={numero}></PokemonBank>
        }
    )}
</div>)}

const PokemonBank = ({pokemon,select,numero}) =>{
    let colorPrincipal = getHexType(pokemon.types[0])
    let colorSecundario
    if (pokemon.types[1]){
        colorSecundario = getHexType(pokemon.types[1])
    }

        return (
            <div className={"pokemonContainerBank borderPokemon"} style={{borderColor: colorPrincipal}} key={pokemon.id}>
                <Link to={`/${pokemon.id}`}>
                <div className="bodyPokemon">
                    <div className={"headerPokemon"} style={{color: colorPrincipal}}>#{numero}</div>
                    <div className="divImagePokemon">
                        <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${addLeadingZeros(pokemon.id,3)}.png`} alt={pokemon.name} className="imgPokemon"/>
                    </div>
                </div>
                <div className={"footerPokemon"} style={{backgroundColor: colorPrincipal}}>{capitalizeFirstLetter(pokemon.name)}</div>
                </Link>
            </div>
        )}


export {PokemonBank,FilterPokemons}