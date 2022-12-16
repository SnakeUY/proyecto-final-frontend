import React from "react";
import { useState, useEffect } from "react";
import { getTypes } from "../../Services/backend-connection";
const PokeTypes = ({text,typos,settype}) =>{
    
    const [pokeTypes, setPokeTypes] = useState([])

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