import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = (props) =>{
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [formError, setFormError] = useState(false)
    const navigate = useNavigate()

    const cleanAlerts = () => {
        setFormError(false)
      }
    
    const postLogin = async (credentials) => {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        };
        const fetchResponse = await fetch("http://localhost:8000/users/login", requestOptions)
        const responseData = await fetchResponse.json()
        return responseData
      }
    
    const handleClick= async()=>{
      cleanAlerts()
      const credentialsd = { email: email, password: password}
      const responseData = await postLogin(credentialsd)
  
      if (responseData.status === 'ok'){
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json", "auth-token": responseData.token },
          body: JSON.stringify(credentialsd),
        };
        const fetchResponse2 = await fetch("http://localhost:8000/users/getinfo", requestOptions)
        const responseData2 = await fetchResponse2.json()
        props.login(responseData.token,responseData2.email, responseData2.money)
        
        
        navigate("/")
          
    } else {
      setFormError(true)
    }
  }

  const backPrincipal = () => {
    navigate("/")
  }
    
    return(
        <div className="form-container background-login">
                <div className="div-arrow-back">
                    <img className="arrow-back" src="./imagenes/flecha.png" alt="" onClick={backPrincipal} />
                </div>
                <form className="login-inputs" action="#">
                  
                {formError && 
                <div className="alert alert-danger" role="alert">
                         Login error.
                    </div>}

                  <img className="pokemon-logo-login" src="./Imagenes/pokemon-logo.png" alt="" />
                    <input className="input" 
                        type="email" 
                        placeholder="E-mail"
                        onChange={(e) => setEmail(e.target.value)} 
                        name="email"/>

                    <input className="input" 
                        type="password" 
                        placeholder="Contraseña"
                        onChange={(e) => setPassword(e.target.value)} 
                        name="password"/>

                    <button type="button" className="enter-button" onClick={handleClick}>Comenzar</button>
                  
                </form>           
        </div>
    )
}

export default Login