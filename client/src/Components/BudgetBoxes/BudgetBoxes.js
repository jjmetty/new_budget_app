import React, {useContext, useRef} from "react";
import './BudgetBoxesStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ExpenseTable from "../ExpenseTable/ExpenseTable";
import { incomeContext } from "../Home/Home";

export default function BudgetBoxes(){
    
    //future, add apiExpenses in context
    //use state from homeJS for income and setIncome
    const {value , value2, value3} = useContext(incomeContext)
    const [income, setIncome] = value;
    const [newIncome, setnewIncome] = value2;
    const apiExpenses = value3;

    const testRef = useRef();


    //handle on change for new income
    const handleIncomeChange = (e) =>{
        let {value} = e.target
        setIncome(value)
    }

    //map through all expenses amount to get total $
    const expenseTotal = apiExpenses.reduce((acc, cur) => acc + cur.amount, 0)

    //create income and useContext to stop drilling down state

    return (
        <div className="budget-boxes-container">
            <div className="budget-box">
                <div className="box-top budget-top">
                    <p className="box-text" style={{color: 'white'}}>Income</p>
                    <FontAwesomeIcon icon="fa-solid fa-money-bill" className="box-icon income-icon" style={{color:'#85bb65'}} onClick={() => testRef.current.focus()}/>
                </div>
                <input className="budget-box-value income-input" type="number" onChange={handleIncomeChange} value={income} ref={testRef}/>
                {/* <h3 className="budget-box-value" onChange={handleIncomeChange}>{income}</h3> */}
            </div>

            <div className="budget-box">
            <div className="box-top expense-top">
                    <p className="box-text" style={{color: 'white'}}>Expenses</p>
                    <FontAwesomeIcon icon="fa-solid fa-arrow-trend-down" className="box-icon" style={{color:'#C40233'}}/>
                </div>
                <h3 className="budget-box-value">$ {expenseTotal.toFixed(2)}</h3>
            </div>

            <div className="budget-box">
            <div className="box-top remaining-top">
                    <p className="box-text" style={{color: 'white'}}>Remaining</p>
                    <FontAwesomeIcon icon="fa-solid fa-dollar-sign" className="box-icon" style={{color:'#CBE4DE'}}/>
                </div>
                <h3 className="budget-box-value">500</h3>
            </div>
        </div>
    )
}