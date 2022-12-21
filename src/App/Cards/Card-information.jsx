import React, {useEffect, useState} from "react";
import { Link, useParams } from 'react-router-dom'
import { getPokemons } from "../../Services/backend-connection";
import Error404 from "../Pokemon-Search/Error404";
import Loader from "../Loader/Loader";
import Moves from "./Moves";
import TableType from "./Table-type";
import { useReducer } from "react";

const CardInformation = () =>{
    const [state,setState] = useReducer((state,newState)=>{return{...state,...newState}},{isLoading:true})
    const id = useParams().id
    const [pokemon,setPokemon] = useState([])

    async function fetchData(){
        await getPokemons(pokemon=>{
          setPokemon(pokemon.sort((a, b) => a.id - b.id))
        })
      }

      useEffect(()=>{
        fetchData()
      },[])

    useEffect(()=>{
        let aux = pokemon.find((candidate)=>candidate.id ==id)
        if(aux){
            setState({pokemon: aux,isLoading:false})
        }else if(pokemon.length > 0){
                setState({isLoading:false})
            }
      },[id,pokemon])

    function getZeroes(number){
        return number.toString().padStart(3,'0')
    }
    let index = pokemon.indexOf(state.pokemon)

    return( 
    <>
    {(state.isLoading)?
       <Loader/> :
       <>
        {(!state.pokemon)?
        <Error404/>:
            <div className={`${state.pokemon.idtype_types[0].type.toLowerCase()} big-card-container`}>

                <div className= 'bgrn-pokeball'>
                    <img src="./Imagenes/Pokeball.png" alt="" />
                </div>

                <div className='big-card-nav'>
                    <div className='big-card-name'>
                    <Link to={'/'}> 
                        <img className='back-arrow' src="./Imagenes/arrow-left.svg" alt=""/>
                    </Link>
                        <span>{state.pokemon.name}</span>
                    </div>
                    <div className='pokemon-number'>
                        <span>#{getZeroes(state.pokemon.id)}</span>
                    </div>
                </div>
                
                <div className='pokemon-image-container'>
                    <div>
                    {
                        pokemon[index-1] &&  (
                            <Link to={'/'+pokemon[index-1].id}>
                            <img className="frame-arrow frame-left" src="./Imagenes/Frame.svg" alt="" />
                        </Link>
                        )
                    }
                    </div>
                    <img className={`${state.pokemon.name.toLowerCase()}-image big-card-pokeimage`} src={state.pokemon.pokeurl}/>
                    <div>
                    {
                        
                        pokemon[index+1] &&  (
                            
                    <Link to={'/'+pokemon[index+1].id}>
                            <img className="frame-arrow" src="./Imagenes/Frame.svg" alt="" />
                    </Link> 
                    
                    )
                }
                </div>
                </div>

                <div className='container-type'>
                    <div className='table-type'>
                            {
                            state.pokemon.idtype_types.map((type)=>{
                                return(
                                <TableType
                                type={type.type} />)
                            })
                        }
                    </div>

                    <span className={`${state.pokemon.idtype_types[0].type.toLowerCase()}-color-txt about`}>About</span>

                    <div className='weight-height-moves'>
                        <div className='body-stat'>
                            <div className='measure-box'>
                                <img src="./Imagenes/Weight.svg" alt="" />
                                <span className='measure'>{state.pokemon.weight}</span>
                            </div>
                            <span className='span-stat'>Weight</span>
                        </div>

                        <div className='body-stat middle-stat'>
                            <div className='measure-box'>
                                <img src="./Imagenes/Height.svg" alt="" />
                                <span className='measure'>{state.pokemon.height}</span>
                            </div>
                            <span className='span-stat'>Height</span>
                        </div>

                        <div className={`${state.pokemon.name.toLowerCase()}-moves body-stat`}>
                            <div className='measure-box moves'>
                            {
                                state.pokemon.idmove_moves.map((move)=>{
                                    return(
                                        <Moves
                                        move={move.move}/>)
                                        })
                                    }
                            </div>
                            <span className='span-stat'>Moves</span>
                        </div>
                    </div>

                    <div className='stats-container'>
                    <div className='description-box'>
                            <p className='description'>{state.pokemon.description}</p>
                    </div>
                        <span className={`${state.pokemon.idtype_types[0].type.toLowerCase()}-color-txt`}>Base Stats</span>
                            <div className='base-stats-container'>
                                <div className='stat-box-left'>
                                    <div className={`${state.pokemon.idtype_types[0].type.toLowerCase()}-color-txt stat-composition`}>
                                        <span>HP</span>
                                        <span>ATK</span>
                                        <span>DEF</span>
                                        <span>SATK</span>
                                        <span>SDEF</span>
                                        <span>SPD</span>
                                    </div>
                                    
                                    <div className='stat-number'>
                                        <span>{getZeroes(state.pokemon.hp)}</span>
                                        <span>{getZeroes(state.pokemon.atk)}</span>
                                        <span>{getZeroes(state.pokemon.def)}</span>
                                        <span>{getZeroes(state.pokemon.satk)}</span>
                                        <span>{getZeroes(state.pokemon.sdef)}</span>
                                        <span>{getZeroes(state.pokemon.spd)}</span>
                                    </div>
                                </div>

                                <div className='stat-bar-container'>
                                    <div className={`${state.pokemon.idtype_types[0].type.toLowerCase()}-bar-bgrn stat-bar`}>
                                        <div style={{width:`${(state.pokemon.hp*100)/200}%`}} className={`${state.pokemon.idtype_types[0].type.toLowerCase()} inner-bar`}/>
                                    </div>

                                    <div className={`${state.pokemon.idtype_types[0].type.toLowerCase()}-bar-bgrn stat-bar`}>
                                        <div style={{width:`${(state.pokemon.atk*100)/200}%`}} className={`${state.pokemon.idtype_types[0].type.toLowerCase()} inner-bar`}></div>
                                    </div>

                                    <div className={`${state.pokemon.idtype_types[0].type.toLowerCase()}-bar-bgrn stat-bar`}>
                                        <div style={{width:`${(state.pokemon.def*100)/200}%`}} className={`${state.pokemon.idtype_types[0].type.toLowerCase()} inner-bar`}></div>
                                    </div>
                                    
                                    <div className={`${state.pokemon.idtype_types[0].type.toLowerCase()}-bar-bgrn stat-bar`}>
                                        <div style={{width:`${(state.pokemon.satk*100)/200}%`}} className={`${state.pokemon.idtype_types[0].type.toLowerCase()} inner-bar`}></div>
                                    </div>

                                    <div className={`${state.pokemon.idtype_types[0].type.toLowerCase()}-bar-bgrn stat-bar`}>
                                        <div style={{width:`${(state.pokemon.sdef*100)/200}%`}} className={`${state.pokemon.idtype_types[0].type.toLowerCase()} inner-bar`}></div>
                                    </div>

                                    <div className={`${state.pokemon.idtype_types[0].type.toLowerCase()}-bar-bgrn stat-bar`}>
                                        <div style={{width:`${(state.pokemon.spd*100)/200}%`}} className={`${state.pokemon.idtype_types[0].type.toLowerCase()} inner-bar`}></div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
    }
    </>}
    </>
    )
    
}

export default CardInformation