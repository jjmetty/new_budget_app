import React from "react";
import './ExpenseDialogStyle.css'

export default function NewExpenseDialog({setisCreatingExpense, handleChange, handleSubmit, expenseObject, 
    types, isEditingExpense, setisEditingExpense, editingExpense, isCreatingExpense, seteditingExpense, handleEditSubmit}){
    let isDisabled = false;

    //create options for select tag for expense types
    const mapTypes = types.map((type, i) => (
        <option key={i} value={type}>{type}</option>
    ))

    if (expenseObject.expense.length == 0 || expenseObject.amount.length == 0 || expenseObject.type.length == 0){
        isDisabled = true;
    }else {
        isDisabled = false;
    }

    //for editing inputs
    const handleEditChange = (e) =>{
        let {name, value} = e.target;
        seteditingExpense({...editingExpense, [name]: value})
    }


    return(
        <>
        <div className="modal"> 
                <div className="top-container">
                <div className="vertical-bar"></div>
                <h3 className="expense-text">{isEditingExpense ? "Edit Expense" : "New Expense"}</h3>
                </div>
                <form>
                <div className="modal-content">
                <div className="input-container">
                <div className="dialog-expense-label">
                {isCreatingExpense ? <input type='text' name ='expense' value={expenseObject.expense} className="new-expense-input expense-input" placeholder="Expense" onChange={handleChange} required/> 
                : <input type='text' name ='expense' value={editingExpense.expense} className="new-expense-input expense-input" placeholder="Expense" onChange={handleEditChange} required/>}
                </div>
                <div className="dialog-expense-label grouped-amount-type">
                {isCreatingExpense ? <select className="expense-select new-expense-input" name='type' onChange={handleChange} value={expenseObject.type} placeholder="Type" required>
                    <option value={""} disabled hidden>Select Type...</option>
                    {mapTypes} 
                </select> 
                : <select className="expense-select new-expense-input" name='type' onChange={handleEditChange} value={editingExpense.type} placeholder="Type" required>
                <option value={""} disabled hidden>Select Type...</option>
                {mapTypes}
                </select>}
                {isCreatingExpense ? <input type='number' name='amount' value={expenseObject.amount} className="new-expense-input expense-amount-input" placeholder="Amount" onChange={handleChange} required/> 
                : <input type='number' name='amount' value={editingExpense.amount} className="new-expense-input expense-amount-input" placeholder="Amount" onChange={handleEditChange} required/>}
                </div>
                </div>
                <div className="dialog-button-layout">
                { isCreatingExpense ? <button className="dialog-expense-button" type="button" onClick = {handleSubmit}>Submit</button> 
                : <button className="dialog-expense-button" type="button" onClick = { () => handleEditSubmit(editingExpense._id)}>Save</button>}
                
                

                {isCreatingExpense ? <button className="dialog-expense-button" onClick={() => setisCreatingExpense(false)}>Cancel</button> 
                : <button className="dialog-expense-button" onClick={() => setisEditingExpense(false)}>Cancel</button>}
                </div>
                
            </div>
            </form>
        </div>
        {isCreatingExpense ? <div className="overlay" onClick={() => setisCreatingExpense(false)}></div>
        : <div className="overlay" onClick={() => setisEditingExpense(false)}></div> }
        
        </>
    )
}