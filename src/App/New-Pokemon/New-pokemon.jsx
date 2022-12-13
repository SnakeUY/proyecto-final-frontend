import React from "react";
import { useNavigate } from "react-router-dom"

const NewPokemonBox = () =>{
    const navigate = useNavigate()
    return(
        <div className='new-pokemon-border box' style={{cursor: "pointer"}} onClick={()=> navigate('./addpokemon') }>
            <span/>
                <img className="mini" src="./Imagenes/15273.png" alt="" />  
                <div className='new-pokemon name-box'>
                    <span>Agregar</span>
                </div>
            </div>
    )
}

export default NewPokemonBox