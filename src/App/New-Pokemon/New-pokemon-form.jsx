import React from "react";
import { PokeTypes } from "./New-pokemon-Types"
import { useNavigate } from "react-router-dom"

const NewPokemonForm = () =>{
    const navigate = useNavigate()
    return(
        <div className="form-container">
                <form className="form-inputs first-form" action="#">
                        <input className="first-inputs" 
                            type="text" 
                            placeholder="Name" 
                            name="name"/>

                        <input className="first-inputs" 
                            type="number" 
                            placeholder="id" 
                            name="id"/>
                        <PokeTypes/>
                        <span className="add-pokemon-image">+</span>
                    </form>

                <form className="form-inputs stats-form" action="">
                        <input className="input-stats" 
                            type="text" 
                            placeholder="Descripction" 
                            name="description"/>

                        <input className="input-stats" 
                            type="text" 
                            placeholder="Moves" 
                            name="moves"/>

                        <input className="input-stats" 
                            type="number" 
                            placeholder="Weight" 
                            name="weight"/>

                        <input className="input-stats" 
                            type="number" 
                            placeholder="Height" 
                            name="height"/>
                    
                        <input className="input-stats" 
                            type="number" 
                            placeholder="HP" 
                            name="hp"/>

                        <input className="input-stats" 
                            type="number" 
                            placeholder="HP" 
                            name="hp"/>

                        <input className="input-stats" 
                            type="number" 
                            placeholder="HP" 
                            name="hp"/>

                        <input className="input-stats" 
                            type="number" 
                            placeholder="HP" 
                            name="hp"/>

                        <input className="input-stats" 
                            type="number" 
                            placeholder="HP" 
                            name="hp"/>

                        <input className="input-stats" 
                            type="number" 
                            placeholder="Height" 
                            name="height"/>

                        <input className="input-stats" 
                            type="number" 
                            placeholder="HP" 
                            name="hp"/>

                        <input className="input-stats" 
                            type="number" 
                            placeholder="HP" 
                            name="hp"/>
                </form>
                <div className="form-buttons">
                    <button className="enter-button">Add</button>
                    <button className="enter-button" onClick={()=> navigate('/') }>Back</button>
                </div>
            </div>
    )
}

export default NewPokemonForm