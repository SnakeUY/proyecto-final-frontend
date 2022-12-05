import React from "react";

const Navbar = ({change,stateChange,search}) =>{
    return (
        <nav> 
            <div className="title margins">
                 <div className="logo">
                    <img className="imageLogo" src="/Sprites/Icons/Pokeball.png" alt="pokeball"/>
                 
                 <span className="textTitle margins">
                    Pokédex
                 </span> </div> 
                 <div className="typeOrder" onClick={() => change(!stateChange)}>
                 {(!stateChange)?
                    <>
                        #<img src="/Sprites/Icons/Arrow.svg" alt="arrow" className="arrowNav"/>
                    </>
                 :
                    <>
                        A<img src="/Sprites/Icons/Arrow.svg" alt="arrow" className="arrowNav"/>
                    </>
                }
                </div>
            </div>
                  <div className="searchBar">
                  <input type="text" placeholder="&#xF002; Buscar" className="fontAw" onChange={(e)=> search(e.target.value)}/>
                  </div>
        </nav>
    )
}
export default Navbar