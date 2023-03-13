import React from "react";
import './NavbarStyle.css'

export default function Navbar () {
    return(
    <div className="nav-bar-container">
        <div className="nav-bar">
                <h3 className="logo-name">MyBudgetter</h3>
                <button className="nav-button">Login</button>
        </div>
    </div>
    )
}