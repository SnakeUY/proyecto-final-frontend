import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () =>{
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
            localStorage.setItem("userToken", responseData.token)
            navigate("/")
    } else {
      setFormError(true)
    }

    }
    return(
        <div className="background-login form-container">
                <form className="login-inputs" action="#">
                {formError && 
                <div className="alert alert-danger" role="alert">
                         Login error.
                    </div>}

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