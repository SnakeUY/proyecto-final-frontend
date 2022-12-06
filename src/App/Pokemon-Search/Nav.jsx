import React from "react";

const Nav = (props) =>{
    return(
        <div className="navbar">
            <div className="title">
                <div className="pokemon-logo">
                    <img className="logo" src="../Imagenes/Pokeball.png" alt="" />
                    <h1>Pokédex</h1>
                </div>
                <div className="order-button-box">
                    <button className="order-button" 
                        onClick={()=>{props.changeOrder()}}>
                            {props.pokemonOrder}
                    </button>
                    <img src="../Imagenes/Arrow.svg" alt="" />
                </div>
            </div>

            <div>
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