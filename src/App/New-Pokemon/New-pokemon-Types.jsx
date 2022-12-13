import React from "react";
import { useState, useEffect } from "react";
import { getTypes } from "../../services/backend-connection";
const PokeTypes = () =>{
    
    const [pokeTypes, setPokeTypes] = useState([])
    const [state,setState] = useState('coconut');


    useEffect(()=>{
    async function fetchData(){
        getTypes(types => {
            setPokeTypes(types)
            console.log(types)
            })
            console.log(pokeTypes)
        }
    fetchData()
    },[])
    

    return(
        <>
        {(!pokeTypes)?
        <p>Cargando formulario</p>:
        <select className="input-stats" value={state} onChange={(e) =>setState(e.target.value)}>
        <option /> {
            pokeTypes.map((optionNode) => {
         return <option key={optionNode.id} value={optionNode.type}>{optionNode.type}</option>
    })
    }
        </select>
        }
        </>
    )
}

export {PokeTypes}