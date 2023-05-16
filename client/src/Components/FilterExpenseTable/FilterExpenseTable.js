import React from "react";
import './FilterExpenseTableStyle.css'

export default function FilterExpenseTable(){
    return(
        <div className="filter-table-container">
        <input type="text" className="filter-expense-input" placeholder="Filter Table..."/>
        </div>
    )
}