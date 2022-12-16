import React from "react";
import { PokeTypes } from "./New-pokemon-Types"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { PokeMoves } from "./New-pokemon-Moves";
import { addPokemon, insertMove, insertType } from "../../services/backend-connection"
const NewPokemonForm = ({getStoredToken}) =>{
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
                        <span>Name</span>
                        <input className="first-inputs" 
                            type="text" 
                            placeholder="Name" 
                            name="name"
                            onChange={(e) => setState({...state, name:e.target.value})}
                            />
                        <span>Description</span>
                        <input className="first-inputs" 
                            type="text" 
                            placeholder="Descripction" 
                            name="description"
                            onChange={(e) => setState({...state, description:e.target.value})}
                            />
                            
                        <div className="options-form-container">
                            <div className="option-container">
                                <span>Types</span>
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

                            <div className="option-container">
                                <span>Moves</span>
                                <PokeMoves
                                    text="1st Move"
                                    moves={firstMove}
                                    setMoves={setFirstMove}/>
                                <PokeMoves
                                    text="2nd Move"
                                    moves={secondMove}
                                    setMoves={setSecondMove}/>
                            </div>
                        </div>
                    
                        <span>Add Image</span>
                        <span className="add-pokemon-image">+</span>
                    </form>

                <form className="form-inputs stats-form" action="">
                        <span>Number</span>
                        <input className="input-stats" 
                            type="number" 
                            placeholder="id"
                            name="id"
                            onChange={(e) => setState({...state, id:e.target.value})}
                            />
                        <span>Weight</span>
                        <input className="input-stats" 
                            type="number" 
                            placeholder="Weight" 
                            name="weight"
                            onChange={(e) => setState({...state, weight:e.target.value})}
                            />
                        <span>Height</span>
                        <input className="input-stats" 
                            type="number" 
                            placeholder="Height" 
                            name="height"
                            onChange={(e) => setState({...state, height:e.target.value})}
                            />
                        <span>Price</span>
                        <input className="input-stats" 
                            type="number" 
                            placeholder="Price" 
                            name="price"
                            onChange={(e) => setState({...state, price:e.target.value})}
                            />

                        <span>HP</span>
                        <input className="input-stats" 
                            type="number" 
                            placeholder="HP" 
                            name="hp"
                            min={0}
                            max={200}
                            onChange={(e) => setState({...state, hp:e.target.value})}
                            />

                        <span>ATK</span>
                        <input className="input-stats" 
                            type="number" 
                            placeholder="ATK" 
                            name="atk"
                            min={0}
                            max={200}
                            onChange={(e) => setState({...state, atk:e.target.value})}
                            />

                        <span>DEF</span>
                        <input className="input-stats" 
                            type="number" 
                            placeholder="DEF" 
                            name="def"
                            min={0}
                            max={200}
                            onChange={(e) => setState({...state, def:e.target.value})}
                            />

                        <span>SATK</span>
                        <input className="input-stats" 
                            type="number" 
                            placeholder="SATK" 
                            name="satk"
                            min={0}
                            max={200}
                            onChange={(e) => setState({...state, satk:e.target.value})}
                            />

                        <span>SDEF</span>
                        <input className="input-stats" 
                            type="number" 
                            placeholder="SDEF" 
                            name="sdef"
                            min={0}
                            max={200}
                            onChange={(e) => setState({...state, sdef:e.target.value})}
                            />

                        <span>SPD</span>
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
                    <button className="enter-button"style={{cursor: "pointer"}} onClick={()=> addNewPoke({state,typeOne,typeTwo,firstMove,secondMove,getStoredToken,navigate})}>Add</button>
                    <button className="enter-button" onClick={()=> navigate('/') }>Back</button>
                </div>
            </div>
    )
}

const addNewPoke = async ({state,typeOne,typeTwo,firstMove,secondMove,getStoredToken,navigate}) =>{
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
        const token = getStoredToken()
        console.log("Token")
        console.log(token)

    let tpyeOneArr,tpyeTwoArr,moveOneArr,moveTwoArr = {}

        if(!isNaN(typeOne)){{
            tpyeOneArr = {
                idpoke:state.id,
                idtype:typeOne
            }
            console.log("arr")
            console.log(tpyeOneArr)

        }
    if(!isNaN(typeTwo)){
       tpyeTwoArr = {
            idpoke:state.id,
            idtype:typeTwo
        }
        console.log(tpyeTwoArr)
    }
    if(!isNaN(firstMove)){
    moveOneArr = {
        idpoke:state.id,
        idmove:firstMove
    }
    console.log(moveOneArr)

    }

    if(!isNaN(secondMove)){
        moveTwoArr = {
            idpoke:state.id,
            idmove:secondMove
        }
        console.log(moveTwoArr)
    }


    await addPokemon(newPoke,token,tpyeOneArr,tpyeTwoArr,moveOneArr,moveTwoArr)


        /*
    const [typeOne,     setTypeOne]      =   useState({})
    const [typeTwo,     setTypeTwo]      =   useState({})
    const [firstMove,   setFirstMove]    =   useState({})
    const [secondMove,  setSecondMove]   =   useState({})
        */
        }
    }
}
export default NewPokemonForm