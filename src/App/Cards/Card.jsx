import React from "react";
import { Link } from "react-router-dom";

const Card = (props) =>{
    function getZeroes(number){
        return number.padStart(3,'0')
    }
    return(
        <Link to={'/'+props.number}>
            <div className={props.type}>
                <span className="number-span">#{getZeroes(props.number)}</span>
                <img className="mini" src={props.pokemon} alt="" />

                <div className={props.title}>
                    <span>{props.name}</span>
                </div>
            </div>
        </Link>
    )
}
export default Card;