import React from "react";
import './TableFunctionsStyle.css'
import NewExpenseButton from "../NewExpenseButton/NewExpenseButton";
import FilterExpenseTable from "../FilterExpenseTable/FilterExpenseTable";

export default function TableFunctions({setisCreatingExpense}){
    return(
        <div className="table-functions-container">
            <NewExpenseButton setisCreatingExpense = {setisCreatingExpense}/>
            <FilterExpenseTable />
        </div>
    )
}