import React, {useState, useEffect} from "react";
import axios from 'axios'
import '../Home/HomeStyle.css'
import Budget from "../Budget/Budget"
import HomeGraph from "../HomeGraph/HomeGraph";
import ExpenseTable from "../ExpenseTable/ExpenseTable";
import TableFunctions from "../TableFunctions/TableFunctions"
import NewExpenseDialog from "../NewExpenseDialog/NewExpenseDialog";


export default function Home() {

    //create url for api calls
    const client = axios.create({
        baseURL: "http://localhost:4000/api/"
    })

    //state for expenses 
    const [apiExpenses, setapiExpenses] = useState([]);
    const [isCreatingExpense, setisCreatingExpense] = useState(false);

    //get expenses from api
    useEffect(() => {
        const getData = async () =>{
            try{
                let response = await client.get('expenses');
                setapiExpenses(response.data);
            } catch(error){
                console.log(error);
            }

        }
        getData();
        // eslint-disable-next-line
    }, []);

    return(
       <div className="home-container" >
        <div className="budget-graph-container">
            <Budget />
            <HomeGraph />
        </div>
        <TableFunctions setisCreatingExpense = {setisCreatingExpense} />
        <ExpenseTable Expenses = {apiExpenses}/>
        {isCreatingExpense && <NewExpenseDialog setisCreatingExpense = {setisCreatingExpense}/>}
       </div>
    )
}