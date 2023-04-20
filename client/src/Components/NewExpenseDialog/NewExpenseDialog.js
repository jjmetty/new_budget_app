import React from "react";
import './NewExpenseDialogStyle.css'

export default function NewExpenseDialog({setisCreatingExpense, handleChange, handleSubmit, expenseObject, types}){
    let isDisabled = false;

    const mapTypes = types.map((type, i) => (
        <option key={i} value={type}>{type}</option>
    ))

    if (expenseObject.expense.length == 0 || expenseObject.amount.length == 0 || expenseObject.type.length == 0){
        isDisabled = true;
    }else {
        isDisabled = false;
    }

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
                <input type='text' name ='expense' value={expenseObject.expense} className="new-expense-input expense-input" placeholder="Expense" onChange={handleChange} required/>
                </div>
                <div className="dialog-expense-label grouped-amount-type">
                <select className="expense-select new-expense-input" name='type' onChange={handleChange} value={expenseObject.type} placeholder="Type" required>
                    <option value={""} disabled hidden>Select Type...</option>
                    {mapTypes}
                </select>
                <input type='number' name='amount' value={expenseObject.amount} className="new-expense-input expense-amount-input" placeholder="Amount" onChange={handleChange} required/>
                </div>
                </div>
                <div className="dialog-button-layout">
                {isDisabled ? 
                <button className="dialog-expense-button">Save</button>
                : 
                <button className="dialog-expense-button" type="button" onClick = {handleSubmit}>Save</button>
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