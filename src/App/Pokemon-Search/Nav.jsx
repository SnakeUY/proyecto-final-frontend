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
                    { !props.getStoredData("userToken") 
                        ?
                        <><button className="order-button" 
                             onClick={()=>{props.changeOrder()}}>
                             {props.pokemonOrder}
                            </button>
                        <img className="order-button-arrow" src="../Imagenes/Arrow.svg" alt="" />
                        <button className="login-logout-button" onClick={loginClick}><img className="user-image" src="../Imagenes/user.svg" alt="" /></button></>
                        :<><p className="user-message-money"> Hola {props.getStoredData("name") } tienes {props.getStoredData("money") } $</p>
                        <button className="order-button" 
                             onClick={()=>{props.changeOrder()}}>
                             {props.pokemonOrder}
                            </button>
                        <img className="order-button-arrow" src="../Imagenes/Arrow.svg" alt="" />
                        <button className="login-logout-button" onClick={logoutClick}><img className="user-image" src="../Imagenes/power.svg" alt="" /></button></> 
                    }
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