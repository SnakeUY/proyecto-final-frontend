import React from "react";
import { PokeTypes } from "./New-pokemon-Types"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { PokeMoves } from "./New-pokemon-Moves";
import { addMoney, addPokemon, getPokemonById } from "../../services/backend-connection"
import Error from "../Error/Error";

const NewPokemonForm = ({getStoredData,sendToken,error}) =>{
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
        pokeurl:'',
      })

      const [typeOne, setTypeOne] = useState({})
      const [typeTwo, setTypeTwo] = useState({})
      const [firstMove, setFirstMove] = useState({})
      const [secondMove, setSecondMove] = useState({})
      
      sendToken()
    return(
        <>
        {(error === "401") ? <Error error={error}/> :
           
           <div className="form-container flex-center-column">
                   <form className="form-inputs first-form" action="#">
                           <span className="title-stat-forms">Name</span>
                           <input className="first-inputs" 
                               type="text" 
                               placeholder="Name" 
                               name="name"
                               onChange={(e) => setState({...state, name:e.target.value})}
                               />
                           <span className="title-stat-forms">Description</span>
                           <input className="first-inputs" 
                               type="text" 
                               placeholder="Description" 
                               name="description"
                               onChange={(e) => setState({...state, description:e.target.value})}
                               />
                               
                           <div className="options-form-container">
                               <div className="option-container">
                                   <span className="title-stat-forms">Types</span>
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
                                   <span className="title-stat-forms">Moves</span>
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
                           <span className="title-stat-forms">Add Image</span>
                           <div className="add-pokemon-image">
                           {(!state.pokeurl =='')? <img className="new-pokemon-image" src={state.pokeurl}/>  : "" }</div>
                           <input className="input-stats url-input" 
                                   type="text" 
                                   placeholder="URL"
                                   name="url-image"
                                   onChange={(e) => setState({...state, pokeurl:e.target.value})}
                                   />
                       </div>
                       </form>
   
                   <form className="form-inputs stats-form" action="">
                           <div className="stats-form-container">
                               <span className="title-stat-forms">Number</span>
                               <input className="input-stats" 
                                   type="number" 
                                   placeholder="id"
                                   name="id"
                                   onChange={(e) => setState({...state, id:e.target.value})}
                                   />
                           </div>
   
                           <div className="stats-form-container">
                               <span className="title-stat-forms">Weight</span>
                               <input className="input-stats" 
                                   type="number" 
                                   placeholder="Weight" 
                                   name="weight"
                                   onChange={(e) => setState({...state, weight:e.target.value})}
                                   />
                               </div>
   
                           <div className="stats-form-container">
                               <span className="title-stat-forms">Height</span>
                               <input className="input-stats" 
                                   type="number" 
                                   placeholder="Height" 
                                   name="height"
                                   onChange={(e) => setState({...state, height:e.target.value})}
                                   />
                           </div>
   
                           <div className="stats-form-container">
                               <span className="title-stat-forms">HP</span>
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
                               <span className="title-stat-forms">ATK</span>
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
                               <span className="title-stat-forms">DEF</span>
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
                               <span className="title-stat-forms">SATK</span>
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
                               <span className="title-stat-forms">SDEF</span>
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
                                <span className="title-stat-forms">SPD</span>
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
                               <span className="title-stat-forms">Price</span>
                               <input className="input-stats" 
                                   type="number" 
                                   placeholder="Price" 
                                   name="price"
                                   onChange={(e) => setState({...state, price:e.target.value})}
                                   />
                           </div>
                   </form>
                   <div className="form-buttons">
                       <button className="enter-button"style={{cursor: "pointer"}} onClick={()=> addNewPoke({state,typeOne,typeTwo,firstMove,secondMove, getStoredData, navigate})}>Add</button>
                       <button className="enter-button" onClick={()=> navigate('/') }>Back</button>
                   </div>
               </div>
           }
       </>
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
            } else if(state.price < 100){
                alert("El precio no puede ser menor a 100")
            }else
            {

            let exist
            await getPokemonById(state.id)
            .then((pokemon) =>
                {
                 
                if(pokemon.length > 0){
                if(pokemon[0].id == state.id){
                    exist = true
                }else exist = false
            }else exist = false
        }

            )
          

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


    const email = getStoredData("email")
    const credential = { email: email }
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json", "auth-token": token },
        body: JSON.stringify(credential),
      };
      const fetchResponse = await fetch("http://localhost:8000/users/get-money", requestOptions)
      const responseData = await fetchResponse.json()
  
      const money = parseInt(responseData.money) + 50
   
      await addMoney(email,money,token)
      localStorage.removeItem("money")
      localStorage.setItem("money", money)
    navigate(`/${newPoke.id}`)
    }
    }else{
        alert("El id del pokemon ya existe")
    }
}
}


export default NewPokemonForm