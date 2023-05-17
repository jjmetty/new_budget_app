import React, {useContext, useRef, useState} from "react";
import './BudgetBoxesStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { incomeContext } from "../Home/Home";

export default function BudgetBoxes(){
    
    
    //use state from homeJS for income and apiExpenses
    const {value ,value3, value4, value5, value6} = useContext(incomeContext)
    const [income, setIncome] = value;
    // const [newIncome, setnewIncome] = value2;
    const apiExpenses = value3;
    const client = value4;
    const [isEditingIncome, setisEditingIncome] = value5;
    const getEditingIncome = value6;

    //editing state
    const [editingIncome, seteditingIncome] = useState(income)

    //when clicked, edit by getting id
    const clickEditIncome = (id) =>{
        getEditingIncome(id);
        setisEditingIncome(true);
    }



    //map through all expenses amount to get total $
    const expenseTotal = apiExpenses.reduce((acc, cur) => acc + cur.amount, 0)

    const myIncome = income.map(i => <p key={i._id} className="budget-box-value income-input" onClick={() => clickEditIncome(i._id)}>$ {i.income}</p>)

    //to create number to subtract from
    const incomeValue = income.map(i => i.income);


    return (
        <div className="budget-boxes-container">
            <div className="budget-box">
                <div className="box-top budget-top">
                    <p className="box-text" style={{color: 'white'}}>Income</p>
                    <FontAwesomeIcon icon="fa-solid fa-money-bill" className="box-icon income-icon" style={{color:'#85bb65'}} />
                </div>
                {myIncome}
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
                <h3 className="budget-box-value">$ {incomeValue - expenseTotal}</h3>
            </div>
        </div>
    )
}