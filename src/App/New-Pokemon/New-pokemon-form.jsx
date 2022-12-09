import React from "react";

const NewPokemonForm = () =>{
    return(
        <div className="form-container">
                <form className="form-inputs" action="#">
                    <input className="input-stats" 
                        type="text" 
                        placeholder="Name" 
                        name="name"/>

                    <input className="input-stats" 
                        type="number" 
                        placeholder="Number" 
                        name="number"/>

                    <input className="input-stats" 
                        type="text" 
                        placeholder="Types" 
                        name="types"/>

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
                </form>
                <button className="enter-button">Agregar</button>
            </div>
    )
}

export default NewPokemonForm