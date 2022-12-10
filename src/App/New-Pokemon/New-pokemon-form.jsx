import React from "react";

const NewPokemonForm = () =>{
    return(
        <div className="form-container">
                <form className="form-inputs" action="#">
                    <div className="input-stats-container">
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
                    </div>

                    <div className="input-stats-container">
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
                    </div>
                    
                </form>

                <div className="add-pokemon-image">
                        <span>+</span>
                </div>
                <button className="enter-button">Agregar</button>
            </div>
    )
}

export default NewPokemonForm