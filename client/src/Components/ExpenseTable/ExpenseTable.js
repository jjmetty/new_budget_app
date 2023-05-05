import React, {useState} from "react";
import './ExpenseTableStyle.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ExpenseTable({Expenses, handleDelete, editingExpense, getEditingExpense, seteditingExpense, handleEditSubmit}){

    //update hover of table row

    const formatDate = (date) =>{
        let dateFormat = new Date(date)
        return (dateFormat.getMonth() + 1) + '/' + dateFormat.getDate() + '/' +  dateFormat.getFullYear()
    }

    const formatAmount = (amount) =>{
        return amount.toFixed(2);
    }

    //get expense to edit on click function
    const handleEditClick = (id) =>{
        getEditingExpense(id)
    }

    //save when typing to a state variable
    const handleEditOnChange = (e) =>{
        let {name, value} = e.target;
        seteditingExpense({...editingExpense,  [name] : value})
        console.log(editingExpense)
    }


    const mapExpenses = Expenses?.map(expense =>
        <tr key={expense._id}>
            { editingExpense._id === expense._id ? <td><input type="text" value={editingExpense.expense} className="edit-table-input expense-input" name="expense" 
            onChange={handleEditOnChange} onBlur={ () => handleEditSubmit(expense._id)}/></td> 
            : <td className="real-expense" onClick={() => handleEditClick(expense._id)}>{expense.expense}</td> }
            <td>${formatAmount(expense.amount)}</td>
            <td>{expense.type}</td>
            <td>{formatDate(expense.date)}</td>
            <td><FontAwesomeIcon icon="fa-solid fa-trash" style={{cursor: 'pointer'}} onClick={() => handleDelete(expense._id)}/></td>
        </tr>
    )

    return(
            <table className="expense-table content-box-shadow">
                <thead>
                    <tr>
                        <th>Expense</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {mapExpenses}
                </tbody>
            </table>
    )
}