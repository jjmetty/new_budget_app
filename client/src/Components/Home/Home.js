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

    //expenses from db
    const [apiExpenses, setapiExpenses] = useState([]);

    //creating expense
    const [isCreatingExpense, setisCreatingExpense] = useState(false);
    const [expenseObject, setexpenseObject] = useState({expense: '', amount: '', type: '' });

    //editing expense
    const [isEditingExpense, setisEditingExpense] = useState(false);
    const [editingExpense, seteditingExpense] = useState({expense: '', amount: '', type: '' })
    

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
    const handleExpenseChange = (e) => {
        let {value, name} = e.target;
        if (isEditingExpense){
            seteditingExpense({...editingExpense, [name]: value})
        } else{
            setexpenseObject({...expenseObject, [name]: value})
        }
 
    }

    //submit new expense
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

    //delete an expense
    const handleExpenseDelete = async (id) =>{
        try{
            await client.delete(`expenses/${id}`)
            const newExpenseList = apiExpenses.filter(expense => expense._id != id)
            setapiExpenses(newExpenseList);
        }catch(error){
            console.log(error)
        }
    }

    //get editing expense
    const getEditingExpense = async (id) =>{
        try{
            const response = await client.get(`expenses/${id}`)
            setisEditingExpense(true);
            seteditingExpense(response.data);
            console.log(editingExpense)
        } catch (error){
            console.log(error);
        }
    }

    //add field for is manually added 
    //add confirmation to delete 
    //create inline editing in table
    //add more to types list and sort alphabetically by creating function
    //add current month above table
    return(
       <div className="home-container" >
        <div className="budget-graph-container">
            <Budget />
            <HomeGraph />
        </div>
        <TableFunctions setisCreatingExpense = {setisCreatingExpense} />
        <ExpenseTable Expenses = {apiExpenses} handleDelete = {handleExpenseDelete} handleChange={handleExpenseChange} setisEditingExpense = {setisEditingExpense}
         getEditingExpense = {getEditingExpense} isEditingExpense={isEditingExpense} editingExpense = {editingExpense}/>
        {isCreatingExpense && <NewExpenseDialog setisCreatingExpense = {setisCreatingExpense} 
            handleChange = {handleExpenseChange} types = {types}
            handleSubmit = {handleNewExpenseSubmit} expenseObject = {expenseObject}/>}
       </div>
    )
}