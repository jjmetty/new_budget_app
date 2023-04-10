import React from "react";
import './ExpenseTableStyle.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ExpenseTable({Expenses}){

    const formatDate = (date) =>{
        let dateFormat = new Date(date)
        return (dateFormat.getMonth() + 1) + '/' + dateFormat.getDate() + '/' +  dateFormat.getFullYear()
    }

    const mapExpenses = Expenses?.map(expense =>
        <tr key={expense._id}>
            <td>{expense.expense}</td>
            <td>{expense.amount}</td>
            <td>{expense.type}</td>
            <td>{formatDate(expense.date)}</td>
            <td><FontAwesomeIcon icon="fa-solid fa-trash" style={{cursor: 'pointer'}}/></td>
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