import React from "react";
import { useNavigate } from "react-router-dom"

const NewPokemonBox = () =>{
    const navigate = useNavigate()
    return(
        <div style={{cursor: "pointer"}} onClick={()=> navigate('./addpokemon') }>
            <div className="new-pokemon-border box">
                <span/>
                <img className="mini" src="./Imagenes/15273.png" alt="" />  
            </div>

                <div className='new-pokemon name-box'>
                    <span className="span-pokemonlist-name">Agregar</span>
                </div>
            </div>
    )
}

export default NewPokemonBox