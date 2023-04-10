import React from "react";
import './NewExpenseDialogStyle.css'

export default function NewExpenseDialog({setisCreatingExpense}){
    const isDisabled = false;


    return(
        <>
        <div className="modal"> 
                <div className="section-top">
                </div>
                <form>
                <div className="modal-content">
                <div className="dialog-expense-label">
                <label>Expense</label>
                <input type='text' name ='expense' required/>
                </div>
                <div className="dialog-expense-label">
                <label>Type</label>
                <select className="expense-select" name='type' required>
                </select>
                </div>
                <div className="dialog-expense-label">
                <label>Amount</label>
                <input type='number' name='amount' required/>
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