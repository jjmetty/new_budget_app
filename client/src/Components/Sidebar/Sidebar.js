import React from "react";
import './SidebarStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Sidebar (){
    //create on hover and transitions for sidebar icons and text color
    //add google fonts
    //on hover for mybudgetter make gradient color 
    return(
        <div className="sidebar-container">
            <br />
            <ul className="sidebar-list">
                <li className="sidebar-links"><FontAwesomeIcon icon="fa-solid fa-house" className="sidebar-icons"/><div className="sidebar-title">Home</div></li>
                <li className="sidebar-links"><FontAwesomeIcon icon="fa-solid fa-chart-simple" className="sidebar-icons"/><div className="sidebar-title">Graphs</div></li>
                <li className="sidebar-links"><FontAwesomeIcon icon="fa-solid fa-calendar" className="sidebar-icons"/><div className="sidebar-title">Calendar</div></li>
                <li className="sidebar-links"><FontAwesomeIcon icon="fa-solid fa-file" className="sidebar-icons"/><div className="sidebar-title">Reports</div></li>
            </ul>
            
        </div>
    )
}