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


    let incomeTest = incomeValue[0]

    const barPercentage = (expenseTotal / incomeValue) * 100 ;

    const setWidth = {
        width: `${barPercentage}% `
    }


    return(
        <div className="budget-bar-container">
       <div className="budget-bar-wrapper">
        <div className="fill-bar" style={setWidth}>
        <span className="budget-bar-text inside-text">{barPercentage.toFixed(0)}%</span>
        </div>
        </div>
        <div className="budget-bar-text">
            <p>{expenseTotal} / {incomeValue}</p>
        </div>
        </div>
    )
}