import React from "react";
import './BudgetStyle.css';
import BudgetBoxes from "../BudgetBoxes/BudgetBoxes";


export default function Budget(){
    return (
        <div className="budget-container">
            <BudgetBoxes />
        </div>
    )
}