import React from "react";

const NewPokemonImput = (props) =>{
    return(
        <input className="input-stats" 
                        type={props.type} 
                        placeholder={props.placeholder} 
                        name={props.name}/>
    )
}

export default NewPokemonImput