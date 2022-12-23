import React from "react";
import { useNavigate } from "react-router-dom"

const Pokedex = ({showFavorite,setShowFavorite}) =>{
    
    return(
        <div style={{cursor: "pointer"}} onClick={()=> (showFavorite)? setShowFavorite(false) : setShowFavorite(true)}>
            <div className="new-pokemon-border box">
                <span/>
                {(!showFavorite)? <img className="mini" src="./Imagenes/pokeball-red.png" alt="" />  : <img className="mini" src="./Imagenes/pokeball-red-opened.png" alt="" /> }  
            </div>

            <div className='new-pokemon name-box'>
                    <span className="span-pokemonlist-name">{(!showFavorite)? "My Pokedex" : "Back"}</span>
                </div>
            </div>
    )
}

export default Pokedex