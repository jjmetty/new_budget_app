import React from "react";
import { useRef } from "react";
import './ExpenseTableStyle.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ExpenseTable({Expenses, handleDelete, getEditingExpense, handleEditSubmit, setisEditingExpense}){

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
        setisEditingExpense(true);
    }


    //when press delete button add a check or x to confirm

    const mapExpenses = Expenses?.map(expense =>
        <tr key={expense._id}>
            <td>{expense.expense}</td> 
            <td>${formatAmount(expense.amount)}</td>
            <td>{expense.type}</td>
            <td>{formatDate(expense.date)}</td>
            <td className="icon-container"><FontAwesomeIcon icon="fa-solid fa-pen-to-square" style={{cursor: 'pointer'}} onClick={() => handleEditClick(expense._id)}/>
            <FontAwesomeIcon icon="fa-solid fa-trash" style={{cursor: 'pointer'}} onClick={() => handleDelete(expense._id)}/></td>
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
