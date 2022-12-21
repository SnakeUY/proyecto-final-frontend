import React from "react";
import { PokeTypes } from "./New-pokemon-Types"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { PokeMoves } from "./New-pokemon-Moves";
import { addPokemon, getPokemonById } from "../../Services/backend-connection"
const NewPokemonForm = ({getStoredData}) =>{
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
        pokeurl:[],
      })

      const [typeOne, setTypeOne] = useState({})
      const [typeTwo, setTypeTwo] = useState({})
      const [firstMove, setFirstMove] = useState({})
      const [secondMove, setSecondMove] = useState({})
      const sendToken = async () => {

            const token = getStoredData("userToken")
            console.log(token)
            const settings = { 
            method: 'POST', 
            headers: { 
                "Content-Type": "application/json", 
                "auth-token": token },
            };
        
            try {
                const fetchResponse = await fetch(`http://localhost:8000/users/validate-token`, settings);
                console.log(fetchResponse)
                if(fetchResponse.ok === false){
                    navigate("/")
                }
            
            } catch (e) {
                return e;
            }
        }

      sendToken()
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

                    <div className="stats-form-container">
                        <span>Add Image</span>
                        <div className="add-pokemon-image"><img className="new-pokemon-image-url" src={state.pokeurl}/></div>
                        <textarea className="input-stats url-input" 
                                type="text" 
                                placeholder="URL"
                                name="url-image"
                                onChange={(e) => setState({...state, pokeurl:e.target.value})}
                                />
                    </div>
                    </form>

                <form className="form-inputs stats-form" action="">
                        <div className="stats-form-container">
                            <span>Number</span>
                            <input className="input-stats" 
                                type="number" 
                                placeholder="id"
                                name="id"
                                onChange={(e) => setState({...state, id:e.target.value})}
                                />
                        </div>

                        <div className="stats-form-container">
                            <span>Weight</span>
                            <input className="input-stats" 
                                type="number" 
                                placeholder="Weight" 
                                name="weight"
                                onChange={(e) => setState({...state, weight:e.target.value})}
                                />
                            </div>

                        <div className="stats-form-container">
                            <span>Height</span>
                            <input className="input-stats" 
                                type="number" 
                                placeholder="Height" 
                                name="height"
                                onChange={(e) => setState({...state, height:e.target.value})}
                                />
                        </div>

                        <div className="stats-form-container">
                            <span>HP</span>
                            <input className="input-stats" 
                                type="number" 
                                placeholder="HP" 
                                name="hp"
                                min={0}
                                max={200}
                                onChange={(e) => setState({...state, hp:e.target.value})}
                                />
                        </div>

                        <div className="stats-form-container">
                            <span>ATK</span>
                            <input className="input-stats" 
                                type="number" 
                                placeholder="ATK" 
                                name="atk"
                                min={0}
                                max={200}
                                onChange={(e) => setState({...state, atk:e.target.value})}
                                />
                        </div>

                        <div className="stats-form-container">
                            <span>DEF</span>
                            <input className="input-stats" 
                                type="number" 
                                placeholder="DEF" 
                                name="def"
                                min={0}
                                max={200}
                                onChange={(e) => setState({...state, def:e.target.value})}
                                />
                        </div>

                        <div className="stats-form-container">                    
                            <span>SATK</span>
                            <input className="input-stats" 
                                type="number" 
                                placeholder="SATK" 
                                name="satk"
                                min={0}
                                max={200}
                                onChange={(e) => setState({...state, satk:e.target.value})}
                                />
                        </div>

                        <div className="stats-form-container">
                            <span>SDEF</span>
                            <input className="input-stats" 
                                type="number" 
                                placeholder="SDEF" 
                                name="sdef"
                                min={0}
                                max={200}
                                onChange={(e) => setState({...state, sdef:e.target.value})}
                                />
                        </div>

                        <div className="stats-form-container">
                        <span>SPD</span>
                        <input className="input-stats" 
                            type="number" 
                            placeholder="SPD" 
                            name="spd"
                            min={0}
                            max={200}
                            onChange={(e) => setState({...state, spd:e.target.value})}
                            />
                        </div>

                        <div className="stats-form-container">
                            <span>Price</span>
                            <input className="input-stats" 
                                type="number" 
                                placeholder="Price" 
                                name="price"
                                onChange={(e) => setState({...state, price:e.target.value})}
                                />
                        </div>
                </form>
                <div className="form-buttons">
                    <button className="enter-button"style={{cursor: "pointer"}} onClick={()=> addNewPoke({state,typeOne,typeTwo,firstMove,secondMove,getStoredData,navigate})}>Add</button>
                    <button className="enter-button" onClick={()=> navigate('/') }>Back</button>
                </div>
            </div>
    )
}

const addNewPoke = async ({state,typeOne,typeTwo,firstMove,secondMove,getStoredData,navigate}) =>{
    if(state.id == "" || state.name == "" ){
        alert("Todos los campos son obligatorios")
    } else if(typeOne == typeTwo){
            alert("El pokemon no puede tener dos tipos iguales")
        } else if(state.hp > 200 || state.atk > 200 || state.def > 200 || state.satk > 200 || state.sdef > 200 || state.spd > 200){
            alert("Los stats no puede ser superiores a 200")}
            else if(state.hp < 0 || state.atk < 0 || state.def < 0 || state.satk < 0 || state.sdef < 0 || state.spd < 0){
                alert("Los stats no pueden ser negativos")
            } else 
            {

            let exist
            await getPokemonById(state.id)
            .then((pokemon) =>
                {
                if(pokemon[0].id == state.id){
                    exist = true
                }else exist = false
            }
            )
            console.log(exist)

        if(exist === false) {

        let newPoke = state
        const token = getStoredData("userToken")
        let tpyeOneArr,tpyeTwoArr,moveOneArr,moveTwoArr = {}

    if(!isNaN(typeOne)){{
        tpyeOneArr = {
            idpoke:state.id,
            idtype:typeOne
        }
    }

    if(!isNaN(typeTwo)){
       tpyeTwoArr = {
            idpoke:state.id,
            idtype:typeTwo
        }
    }

    if(!isNaN(firstMove)){
    moveOneArr = {
        idpoke:state.id,
        idmove:firstMove
    }
    }
    
    if(!isNaN(secondMove)){
        moveTwoArr = {
            idpoke:state.id,
            idmove:secondMove
        }
        }
        await addPokemon(newPoke,token,tpyeOneArr,tpyeTwoArr,moveOneArr,moveTwoArr)
        alert("Pokemon creado")
        navigate(`/${newPoke.id}`)
        }
    }
    else{
        alert("El id del pokemon ya existe")
    }
}
}


export default NewPokemonForm