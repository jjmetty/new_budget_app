import React from "react";
import './TableFunctionsStyle.css'
import NewExpenseButton from "../NewExpenseButton/NewExpenseButton";
import FilterExpenseTable from "../FilterExpenseTable/FilterExpenseTable";

export default function TableFunctions(){
    return(
        <div className="table-functions-container">
            <NewExpenseButton />
            <FilterExpenseTable />
        </div>
    )
}