import React, {useEffect, useState} from "react";
import { Link, useParams } from 'react-router-dom'
import {pokemon}  from '../../Database/db';
import Moves from "./Moves";
import TableType from "./Table-type";


const CardInformation = () =>{
    const id = useParams().id
    const [poke,setPokemon] = useState(pokemon.find((candidate)=>candidate.id ==id))
    let index = pokemon.indexOf(poke)
    function getZeroes(number){
        return number.toString().padStart(3,'0')
    }

    useEffect(()=>{
        setPokemon(pokemon.find((candidate)=>candidate.id ==id))
    },[id])

    
    return(
        <div className={`${poke.type[0].toLowerCase()} big-card-container`}>

            <div className= 'bgrn-pokeball'>
                <img src="./Imagenes/Pokeball.png" alt="" />
            </div>

            <div className='big-card-nav'>
                <div className='big-card-name'>
                <Link to={'/'}> 
                    <img className='back-arrow' src="./Imagenes/arrow-left.svg" alt=""/>
                </Link>
                    <span>{poke.name}</span>
                </div>
                <div className='pokemon-number'>
                    <span>#{getZeroes(poke.id)}</span>
                </div>
            </div>
            
            <div className='pokemon-image-container'>
                {
                    pokemon[index-1] &&  (
                        <Link to={'/'+pokemon[index-1].id}>
                        <img className="frame-arrow frame-left" src="./Imagenes/Frame.svg" alt="" />
                    </Link>
                    )
                }
            
                <img className={`${poke.name.toLowerCase()}-image`} src={`./Imagenes/${poke.name.toLowerCase()}.png`}/>
            
                {
                    pokemon[index+1] &&  (
                <Link to={'/'+pokemon[index+1].id}>
                        <img className="frame-arrow" src="./Imagenes/Frame.svg" alt="" />
                </Link> 
                )
            }
            </div>

            <div className='container-type'>
                <div className='table-type'>
                        {
                        poke.type.map((type)=>{
                            return(
                            <TableType
                            type={type} />)
                        })
                    }
                </div>

                <span className={`${poke.type[0].toLowerCase()}-color-txt about`}>About</span>

                <div className='weight-height-moves'>
                    <div className='body-stat'>
                        <div className='measure-box'>
                            <img src="./Imagenes/Weight.svg" alt="" />
                            <span className='measure'>{poke.weight}</span>
                        </div>
                        <span className='span-stat'>Weight</span>
                    </div>

                    <div className='body-stat middle-stat'>
                        <div className='measure-box'>
                            <img src="./Imagenes/Height.svg" alt="" />
                            <span className='measure'>{poke.height}</span>
                        </div>
                        <span className='span-stat'>Height</span>
                    </div>

                    <div className={`${poke.name.toLowerCase()}-moves body-stat`}>
                        <div className='measure-box moves'>
                        {
                            poke.moves.map((moves)=>{
                                return(
                                    <Moves
                                    moves={moves}/>)
                                    })
                                }
                        </div>
                        <span className='span-stat'>Moves</span>
                    </div>
                </div>

                <div className='stats-container'>
                <div className='description-box'>
                        <p className='description'>{poke.description}</p>
                </div>
                    <span className={`${poke.type[0].toLowerCase()}-color-txt`}>Base Stats</span>
                        <div className='base-stats-container'>
                            <div className='stat-box-left'>
                                <div className={`${poke.type[0].toLowerCase()}-color-txt stat-composition`}>
                                    <span>HP</span>
                                    <span>ATK</span>
                                    <span>DEF</span>
                                    <span>SATK</span>
                                    <span>SDEF</span>
                                    <span>SPD</span>
                                </div>
                                
                                <div className='stat-number'>
                                    <span>{getZeroes(poke.hp)}</span>
                                    <span>{getZeroes(poke.atk)}</span>
                                    <span>{getZeroes(poke.def)}</span>
                                    <span>{getZeroes(poke.satk)}</span>
                                    <span>{getZeroes(poke.sdef)}</span>
                                    <span>{getZeroes(poke.spd)}</span>
                                </div>
                            </div>

                            <div className='stat-bar-container'>
                                <div className={`${poke.type[0].toLowerCase()}-bar-bgrn stat-bar`}>
                                    <div style={{width:`${(poke.hp*100)/200}%`}} className={`${poke.type[0].toLowerCase()} inner-bar`}/>
                                </div>

                                <div className={`${poke.type[0].toLowerCase()}-bar-bgrn stat-bar`}>
                                    <div style={{width:`${(poke.atk*100)/200}%`}} className={`${poke.type[0].toLowerCase()} inner-bar`}></div>
                                </div>

                                <div className={`${poke.type[0].toLowerCase()}-bar-bgrn stat-bar`}>
                                    <div style={{width:`${(poke.def*100)/200}%`}} className={`${poke.type[0].toLowerCase()} inner-bar`}></div>
                                </div>
                                
                                <div className={`${poke.type[0].toLowerCase()}-bar-bgrn stat-bar`}>
                                    <div style={{width:`${(poke.satk*100)/200}%`}} className={`${poke.type[0].toLowerCase()} inner-bar`}></div>
                                </div>

                                <div className={`${poke.type[0].toLowerCase()}-bar-bgrn stat-bar`}>
                                    <div style={{width:`${(poke.sdef*100)/200}%`}} className={`${poke.type[0].toLowerCase()} inner-bar`}></div>
                                </div>

                                <div className={`${poke.type[0].toLowerCase()}-bar-bgrn stat-bar`}>
                                    <div style={{width:`${(poke.spd*100)/200}%`}} className={`${poke.type[0].toLowerCase()} inner-bar`}></div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default CardInformation