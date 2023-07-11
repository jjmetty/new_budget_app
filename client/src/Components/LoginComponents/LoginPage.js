import React, {useState} from "react";
import '../LoginComponents/LoginPageStyle.css'

export default function LoginPage() {

    const [isRegistering, setIsRegistering] = useState(false);

    const registerClick = () =>{
        setIsRegistering(!isRegistering);
    }


    console.log(isRegistering)
    return(
        <div className="login-wrapper">
            <div className="login-container">
            <h2 style={{color: "white"}}>Login</h2>
            <input type="text" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            {isRegistering && <input type="password" placeholder="Confirm Password"/>}
            <button className="login-button">{isRegistering ? <span>Register</span> : <span>Login</span>}</button>
            <h6 style={{color: "white", textDecoration: "underline", cursor: "pointer"}} onClick={registerClick}>{isRegistering ? <span>Login Page</span> 
            : <span>No Account? Register</span> }</h6>
            </div>
        </div>
    )
    
}