import React from "react";
import './NavbarStyle.css'

export default function Navbar () {
    return(
    <nav>
        <div className="nav-bar-container">
            <h3 className="logo-name">MyBudgetter</h3>
            <button className="nav-button">Login</button>
        </div>
    </nav>
    )
}