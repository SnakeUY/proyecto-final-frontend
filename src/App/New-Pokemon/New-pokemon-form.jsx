import React from "react";
import { PokeTypes } from "./New-pokemon-Types"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { PokeMoves } from "./New-pokemon-Moves";
const NewPokemonForm = () =>{
    const navigate = useNavigate()
    const [state,setState] = useState({
        id:[],
        name:[],
        description:[],
        weight:[],
        height:[],
        price:[],
        hp:[],
        atk:[],
        def:[],
        satk:[],
        sdef:[],
        spd:[],
      })

      const [typeOne, setTypeOne] = useState({})
      const [typeTwo, setTypeTwo] = useState({})
      const [firstMove, setFirstMove] = useState({})
      const [secondMove, setSecondMove] = useState({})
      
    return(
        <div className="form-container">
                <form className="form-inputs first-form" action="#">
                        <input className="first-inputs" 
                            type="text" 
                            placeholder="Name" 
                            name="name"
                            onChange={(e) => setState({...state, name:e.target.value})}
                            />

                        <input className="first-inputs" 
                            type="text" 
                            placeholder="Descripction" 
                            name="description"
                            onChange={(e) => setState({...state, description:e.target.value})}
                            />
                            
                        <div className="options-form-container">
                            <PokeTypes
                                text="Type 1"
                                types={typeOne}
                                settype={setTypeOne}
                                />
                            <PokeTypes
                                text="Type 2"
                                types={typeTwo}
                                settype={setTypeTwo}
                                />
                            
                        </div>
                        <div className="options-form-container">
                            <PokeMoves
                                text="1st Move"
                                moves={firstMove}
                                setMoves={setFirstMove}/>
                             <PokeMoves
                                text="2nd Move"
                                moves={secondMove}
                                setMoves={setSecondMove}/>
                        </div>
                        <span className="add-pokemon-image">+</span>
                    </form>

                <form className="form-inputs stats-form" action="">
                        <input className="input-stats" 
                            type="number" 
                            placeholder="id"
                            name="id"
                            onChange={(e) => setState({...state, id:e.target.value})}
                            />

                        <input className="input-stats" 
                            type="number" 
                            placeholder="Weight" 
                            name="weight"
                            onChange={(e) => setState({...state, weight:e.target.value})}
                            />

                        <input className="input-stats" 
                            type="number" 
                            placeholder="Height" 
                            name="height"
                            onChange={(e) => setState({...state, height:e.target.value})}
                            />
                        
                        <input className="input-stats" 
                            type="number" 
                            placeholder="Price" 
                            name="price"
                            onChange={(e) => setState({...state, price:e.target.value})}
                            />
                             <input className="input-stats" 
                            type="number" 
                            placeholder="HP" 
                            name="hp"
                            min={0}
                            max={200}
                            onChange={(e) => setState({...state, hp:e.target.value})}
                            />

                        <input className="input-stats" 
                            type="number" 
                            placeholder="ATK" 
                            name="atk"
                            min={0}
                            max={200}
                            onChange={(e) => setState({...state, atk:e.target.value})}
                            />

                        <input className="input-stats" 
                            type="number" 
                            placeholder="DEF" 
                            name="def"
                            min={0}
                            max={200}
                            onChange={(e) => setState({...state, def:e.target.value})}
                            />

                        <input className="input-stats" 
                            type="number" 
                            placeholder="SATK" 
                            name="satk"
                            min={0}
                            max={200}
                            onChange={(e) => setState({...state, satk:e.target.value})}
                            />

                        <input className="input-stats" 
                            type="number" 
                            placeholder="SDEF" 
                            name="sdef"
                            min={0}
                            max={200}
                            onChange={(e) => setState({...state, sdef:e.target.value})}
                            />

                        <input className="input-stats" 
                            type="number" 
                            placeholder="SPD" 
                            name="spd"
                            min={0}
                            max={200}
                            onChange={(e) => setState({...state, spd:e.target.value})}
                            />
                </form>
                <div className="form-buttons">
                    <button className="enter-button"style={{cursor: "pointer"}} onClick={()=> addNewPoke(state,typeOne,typeTwo,firstMove,secondMove)}>Add</button>
                    <button className="enter-button" onClick={()=> navigate('/') }>Back</button>
                </div>
            </div>
    )
}

const addNewPoke = (state,typeOne,typeTwo,firstMove,secondMove) =>{
    if(state.id == "" || state.name == "" ){
        alert("Todos los campos son obligatorios")
    } else if(typeOne == typeTwo){
            alert("El pokemon no puede tener dos tipos iguales")
        } else if(state.hp > 200 || state.atk > 200 || state.def > 200 || state.satk > 200 || state.sdef > 200 || state.spd > 200){
            alert("Los stats no puede ser superiores a 200")}
            else if(state.hp < 0 || state.atk < 0 || state.def < 0 || state.satk < 0 || state.sdef < 0 || state.spd < 0){
                alert("Los stats no pueden ser negativos")
            } else {
        let newPoke = state
        console.log(newPoke)
        //addPokemonToDb(newPoke)
        
        //connectPokemonTypeToDb(typeOne)
        //connectPokemonTypeToDb(typeTwo)
        console.log("ID")
        console.log(newPoke.id)
        console.log("TYPES")
        console.log(typeOne)
        console.log(typeTwo)

        console.log("MOVES")
        console.log(firstMove)
        console.log(secondMove)
        alert("Pokemon creado")
        }
    }
    
export default NewPokemonForm