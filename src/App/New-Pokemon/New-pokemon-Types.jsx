import React from "react";
import { useState, useEffect } from "react";
import { getUniqueTypes } from "../../services/backend-connection";
const PokeTypes = ({text,typos,settype}) =>{
    
    const [pokeTypes, setPokeTypes] = useState([])

    
    useEffect(()=>{
      
        async function fetchData() {
            await getUniqueTypes(types => {
                setPokeTypes(types)
            })
        }
        fetchData()
    },[])

    

    return(
        <>
        {(!pokeTypes)?
        <p>Cargando formulario</p>:
        <select className="option-inputs" value={typos} onChange={(e) => settype(e.target.value)}>
        <option>{text}</option> {
            pokeTypes.map((optionNode) => {
         return <option id={optionNode.id} value={optionNode.id}>{optionNode.type}</option>
    })
    }
        </select>
        }
        </>
    )
}

export {PokeTypes}