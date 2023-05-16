import React from "react";
import './TableFunctionsStyle.css'
import NewExpenseButton from "../NewExpenseButton/NewExpenseButton";
import FilterExpenseTable from "../FilterExpenseTable/FilterExpenseTable";

export default function TableFunctions({setisCreatingExpense}){

    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', {month: 'long'});

    return(
        <div className="table-functions-container">
            <NewExpenseButton setisCreatingExpense = {setisCreatingExpense}/>
            <h2>{currentMonth}</h2>
            <FilterExpenseTable />
        </div>
    )
}