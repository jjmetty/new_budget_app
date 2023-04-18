import React from "react";
import './NewExpenseDialogStyle.css'

export default function NewExpenseDialog({setisCreatingExpense, handleChange}){
    const isDisabled = false;

    //make type and amount on same line, use flex with space around 
    //make width for all inputs the same and space out type and amount and make type bigger
    return(
        <>
        <div className="modal"> 
                <div className="top-container">
                <div className="vertical-bar"></div>
                <h3 className="expense-text">New Expense</h3>
                </div>
                <form>
                <div className="modal-content">
                <div className="input-container">
                <div className="dialog-expense-label">
                <input type='text' name ='expense' className="new-expense-input expense-input" placeholder="Expense" onChange={handleChange} required/>
                </div>
                <div className="dialog-expense-label grouped-amount-type">
                <select className="expense-select new-expense-input" name='type' placeholder="Type" required>
                </select>
                <input type='number' name='amount' className="new-expense-input expense-amount-input" placeholder="Amount" onChange={handleChange} required/>
                </div>
                </div>
                <div className="dialog-button-layout">
                {isDisabled ? 
                <button className="dialog-expense-button">Save</button>
                : 
                <button className="dialog-expense-button" type="button" >Save</button>
                }
                <button className="dialog-expense-button" onClick={() => setisCreatingExpense(false)}>Cancel</button>
                </div>
                
            </div>
            </form>
        </div>
        <div className="overlay" onClick={() => setisCreatingExpense(false)}></div>
        </>
    )
}