import React from "react";
import { useState, useEffect } from "react";
import { getMoves } from "../../services/backend-connection";
const PokeMoves = ({text,moves,setMoves}) =>{
    
    const [pokeMoves, setPokeMoves] = useState([])

    useEffect(()=>{
    async function fetchData(){
        getMoves(moves => {
            setPokeMoves(moves)
            })
          
        }
    fetchData()
    },[])
    

    return(
        <>
        {(!pokeMoves)?
        <p>Cargando formulario</p>:
        <select className="option-inputs" value={moves} onChange={(e) => setMoves(e.target.value)}>
        <option>{text}</option> {
            pokeMoves.map((optionNode) => {
         return <option id={optionNode.id} value={optionNode.id}>{optionNode.move}</option>
    })
    }
        </select>
        }
        </>
    )
}

export {PokeMoves}