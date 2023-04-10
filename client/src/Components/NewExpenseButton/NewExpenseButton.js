import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './NewExpenseButtonStyle.css'


export default function NewExpenseButton({setisCreatingExpense}){

    const handleClick = () =>{
        setisCreatingExpense(true);
    }
    return(
        <div className="new-expense-button-container" onClick={handleClick}>
        <FontAwesomeIcon icon="fa-solid fa-plus" size="sm" style={{marginRight: 4}} /><span className="new-expense-button-text">Add Expense</span>
        </div>
        
    )
}