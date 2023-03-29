import React from "react";
import '../Home/HomeStyle.css'
import Budget from "../Budget/Budget";
import HomeGraph from "../HomeGraph/HomeGraph";


export default function Home() {

    //change flex to 1 and justify content with space between or around
    return(
       <div className="home-container">
        <div className="budget-graph-container">
            <Budget />
            <HomeGraph />
        </div>
       </div>
    )
}