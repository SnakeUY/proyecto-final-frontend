import React from "react";
import { useNavigate } from "react-router-dom"
import {useEffect, useState} from 'react'

const Nav = (props) =>{
    const navigate = useNavigate()

    const loginClick= ()=>{
        navigate("/login")
    }
    
    const logoutClick =  () => {
        props.logout()
        navigate("/login")
    }

   
    return(
        <div className="navbar">
            <div className="title">
                <div className="pokemon-logo">
                    <img className="logo" src="../Imagenes/Pokeball.png" alt="" />
                    <h1>Pokédex</h1>
                </div>
                <div className="order-button-box">
                    { !props.getStoredToken() 
                        ? <button onClick={loginClick}> login </button> 
                        : <button onClick={logoutClick}> logout </button>
                    }
                    <button className="order-button" 
                        onClick={()=>{props.changeOrder()}}>
                            {props.pokemonOrder}
                    </button>
                    <img src="../Imagenes/Arrow.svg" alt="" />
                </div>
            </div>

            <div className="input-index-container">
                <form action="#">
                    <input className="input" 
                        type="search" 
                        placeholder="Buscar" 
                        name="search" 
                        onChange={(e)=>props.search(e.target.value)} 
                        value={props.pokemonSearch}/>
                </form>
            </div>
        </div>
    )
}

export default Nav