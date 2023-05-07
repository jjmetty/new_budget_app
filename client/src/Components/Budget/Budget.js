import React from "react";
import './BudgetStyle.css';
import BudgetBoxes from "../BudgetBoxes/BudgetBoxes";
import BudgetBar from "../BudgetBar/BudgetBar";


export default function Budget({apiExpenses}){
    return (
        <div className="budget-container content-box-shadow">
            <BudgetBoxes apiExpenses = {apiExpenses}/>
            <BudgetBar />
        </div>
    )
}