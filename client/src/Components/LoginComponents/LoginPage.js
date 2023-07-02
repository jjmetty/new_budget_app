import React from "react";
import '../LoginComponents/LoginPageStyle.css'

export default function LoginPage() {
    return(
        <div className="login-wrapper">
            <div className="login-container">
            <h2 style={{color: "white"}}>Login</h2>
            <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Password"/>
            <button className="login-button">Login</button>
            </div>
        </div>
    )
    
}