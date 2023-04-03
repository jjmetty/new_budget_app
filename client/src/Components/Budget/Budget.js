import React from "react";
import './BudgetStyle.css';
import BudgetBoxes from "../BudgetBoxes/BudgetBoxes";
import BudgetBar from "../BudgetBar/BudgetBar";


export default function Budget(){
    return (
        <div className="budget-container content-box-shadow">
            <BudgetBoxes />
            <BudgetBar />
        </div>
    )
}