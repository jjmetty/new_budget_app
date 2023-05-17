import React, {useContext} from "react";
import './BudgetBarStyle.css'
import { incomeContext } from "../Home/Home";

export default function BudgetBar(){

    const {value ,value3} = useContext(incomeContext)
    const [income] = value;
    const apiExpenses = value3;

    //income
    const incomeValue = income.map(i => i.income);
    
    //expense
    const expenseTotal = apiExpenses.reduce((acc, cur) => acc + cur.amount, 0)

    return(
        <div className="budget-bar-container">
       <div className="budget-bar">
        <p className="budget-bar-text">50%</p>
        </div>
        <div className="budget-bar-text">
            <p>{expenseTotal} / {incomeValue}</p>
        </div>
        </div>
    )
}