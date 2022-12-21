import React from "react";
import { Link } from "react-router-dom";

const Card = (props) =>{
    function getZeroes(number){
        return number.padStart(3,'0')
    }
    return(
        <Link to={'/'+props.number}>
            <div>
                <div className={props.type}>
                    <div className="number-flex">
                        <span className="number-span">#{getZeroes(props.number)}</span>
                    </div>
                <img className="mini" src={props.pokemon} alt="" />
                </div>
                
                <div className={props.title}>
                    <span className="span-pokemonlist-name">{props.name}</span>
                </div>
            </div>
        </Link>
    )
}
export default Card;