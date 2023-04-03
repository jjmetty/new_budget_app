import React from "react";
import './ExpenseTableStyle.css'

export default function ExpenseTable(){
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
                    
                </tbody>
            </table>
    )
}