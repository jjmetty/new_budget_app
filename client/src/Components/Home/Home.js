import React, {useState, useEffect, useContext} from "react";
import axios from 'axios'
import '../Home/HomeStyle.css'
import Budget from "../Budget/Budget"
import HomeGraph from "../HomeGraph/HomeGraph";
import ExpenseTable from "../ExpenseTable/ExpenseTable";
import TableFunctions from "../TableFunctions/TableFunctions"
import NewExpenseDialog from "../NewExpenseDialog/NewExpenseDialog";

export const incomeContext = React.createContext();

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
    const [editingExpense, seteditingExpense] = useState(0)

    //income
    const [income, setIncome] = useState(0);
    const [newIncome, setnewIncome] = useState(income);



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
            setexpenseObject({...expenseObject, [name]: value})
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

    //get current id to edit
    const getEditingExpense = async (id) =>{
        try{
            const response = await client.get(`expenses/${id}`)
            seteditingExpense(response.data)
        }catch(error){
            console.log(error)
        }
    }

    //on blur update expense
    const handleEditSubmit = async (id) =>{
        try{
            if (editingExpense){
                let editChange = await client.patch(`expenses/${id}`, editingExpense)
                let updatedExpenses = apiExpenses.map(expense => expense._id == id ? editChange.data : expense)
                setapiExpenses(updatedExpenses)
                seteditingExpense(0)
            }else {
                return;
            }
         
        }catch(error){
            console.log(error)
        }
    } 
    

    //onblur submit, filter out apiexpense where id equal to new state and update



    //check inline editing stuff that i removed
    //add confirmation to delete 
    //create inline editing in table
    //add more to types list and sort alphabetically by creating function
    //add current month above table
    return(
       <div className="home-container" >
        <div className="budget-graph-container">
        <incomeContext.Provider value={{value: [income, setIncome], value2: [newIncome, setnewIncome], value3: apiExpenses}}>
            <Budget/>
            <HomeGraph />
        </incomeContext.Provider>
        </div>
        <TableFunctions setisCreatingExpense = {setisCreatingExpense} />
        <ExpenseTable Expenses = {apiExpenses} handleDelete = {handleExpenseDelete} handleChange={handleExpenseChange} editingExpense = {editingExpense} 
         getEditingExpense = {getEditingExpense} seteditingExpense = {seteditingExpense} handleEditSubmit = {handleEditSubmit}/>
        {isCreatingExpense && <NewExpenseDialog setisCreatingExpense = {setisCreatingExpense} 
            handleChange = {handleExpenseChange} types = {types}
            handleSubmit = {handleNewExpenseSubmit} expenseObject = {expenseObject}/>}
       </div>
    )
}