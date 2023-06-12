import React from "react";
import './SidebarStyle.css'
import Home from "../Home/Home";
import LoginPage from "../LoginComponents/LoginPage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from 'react-router-dom'

export default function Sidebar (){
    //create on hover and transitions for sidebar icons and text color
    //add google fonts
    //on hover for mybudgetter make gradient color 
    return(
        <>

        <div className="sidebar-container">
            <ul className="sidebar-list">
            <NavLink to="/"><li className="sidebar-links"><FontAwesomeIcon icon="fa-solid fa-house" className="sidebar-icons"/><div className="sidebar-title">Home</div></li></NavLink>
            <NavLink to="/graphs"><li className="sidebar-links"><FontAwesomeIcon icon="fa-solid fa-chart-simple" className="sidebar-icons"/><div className="sidebar-title">Graphs</div></li></NavLink>
            <NavLink to="/calendar"><li className="sidebar-links"><FontAwesomeIcon icon="fa-solid fa-calendar" className="sidebar-icons"/><div className="sidebar-title">Calendar</div></li></NavLink>
            <NavLink to="/reports"><li className="sidebar-links"><FontAwesomeIcon icon="fa-solid fa-file" className="sidebar-icons"/><div className="sidebar-title">Reports</div></li></NavLink>
            </ul>
        </div>
        </>
    )
}