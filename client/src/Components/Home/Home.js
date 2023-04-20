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

    //list of type of expense
    const types = ['Rent', 'Expenses', 'Investments']

    //state for expenses 
    const [apiExpenses, setapiExpenses] = useState([]);
    const [isCreatingExpense, setisCreatingExpense] = useState(false);
    const [expenseObject, setexpenseObject] = useState({expense: '', amount: '', type: '' });
    

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

    //update state on change for new expense
    const handleNewExpenseChange = (e) => {
        let {value, name} = e.target;
        setexpenseObject({...expenseObject, [name]: value})
    }

    const handleNewExpenseSubmit = async (e) =>{
        e.preventDefault()
        try{
            let postExpense = await client.post('expenses', expenseObject)
            setapiExpenses([...apiExpenses, postExpense.data])
            setexpenseObject({expense: '', amount: '', type: '' })
            setisCreatingExpense(false);
        }catch(error){
            console.log(error)
        }
    }

    //create submit for new expense object and set up select data
    //set value = to new expeonse object to reset values to 0

    return(
       <div className="home-container" >
        <div className="budget-graph-container">
            <Budget />
            <HomeGraph />
        </div>
        <TableFunctions setisCreatingExpense = {setisCreatingExpense} />
        <ExpenseTable Expenses = {apiExpenses}/>
        {isCreatingExpense && <NewExpenseDialog setisCreatingExpense = {setisCreatingExpense} 
            handleChange = {handleNewExpenseChange} types = {types}
            handleSubmit = {handleNewExpenseSubmit} expenseObject = {expenseObject}/>}
       </div>
    )
}