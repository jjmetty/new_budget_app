import React from "react";
import './NavbarStyle.css'

export default function Navbar () {
    return(
    <nav className="navbar">
        <div className="nav-bar-container">
            <h4 className="logo-name">MyBudgetter</h4>
            {/* <button className="nav-button">Login</button> */}
        </div>
    </nav>
    )
}