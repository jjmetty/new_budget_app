import React from "react";
import '../Home/HomeStyle.css'
import Budget from "../Budget/Budget";
import HomeGraph from "../HomeGraph/HomeGraph";


export default function Home() {

    return(
       <div className="home-container">
        <div className="budget-graph-container">
            <Budget />
            <HomeGraph />
        </div>
       </div>
    )
}