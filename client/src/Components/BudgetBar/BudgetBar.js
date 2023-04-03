import React from "react";
import './BudgetBarStyle.css'

export default function BudgetBar(){
    return(
        <div className="budget-bar-container">
       <div className="budget-bar">
        <p className="budget-bar-text">50%</p>
        </div>
        <div className="budget-bar-text">
            <p>1500/2000</p>
        </div>
        </div>
    )
}