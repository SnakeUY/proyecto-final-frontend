import React from "react";
import { Link } from "react-router-dom";

const Login = () =>{
    return(
        <div className="background-login">
                <form className="login-inputs" action="#">
                    <input className="input" 
                        type="text" 
                        placeholder="Nombre" 
                        name="name"/>

                    <input className="input" 
                        type="email" 
                        placeholder="E-mail" 
                        name="email"/>

                    <input className="input" 
                        type="password" 
                        placeholder="Contraseña" 
                        name="password"/>

                    <button className="login-button">Comenzar</button>
                </form>
                
        </div>
    )
}

export default Login