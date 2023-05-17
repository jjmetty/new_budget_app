import React, {useState, useEffect, useContext} from "react";
import axios from 'axios'
import '../Home/HomeStyle.css'
import Budget from "../Budget/Budget"
import HomeGraph from "../HomeGraph/HomeGraph";
import ExpenseTable from "../ExpenseTable/ExpenseTable";
import TableFunctions from "../TableFunctions/TableFunctions"
import NewExpenseDialog from "../ExpenseDialog/ExpenseDialog";
import IncomeDialog from "../IncomeDialog/IncomeDialog";

export const incomeContext = React.createContext();

export default function Home() {

    //create url for api calls
    const client = axios.create({
        baseURL: "http://localhost:4000/api/"
    })

    //list of type of expense
    const types = ['Rent', 'Expenses', 'Investments','Food', 'Entertainment', 'Groceries', 'Savings' ].sort();

    //expenses from db
    const [apiExpenses, setapiExpenses] = useState([]);

    //creating expense
    const [isCreatingExpense, setisCreatingExpense] = useState(false);
    const [expenseObject, setexpenseObject] = useState({expense: '', amount: '', type: '' });

    //editing expense
    const [isEditingExpense,  setisEditingExpense] = useState(false);
    const [editingExpense, seteditingExpense] = useState({expense: '', amount: '', type: '' })

    //income
    const [income, setIncome] = useState([]);
    const [editingIncome, seteditingIncome] = useState({income: 0});
    const [isEditingIncome, setisEditingIncome] = useState(false);
    

    //find why api/income doesnt work
    //get expenses from api
    useEffect(() => {
        const getData = async () =>{
            try{
                const urls = ['http://localhost:4000/api/expenses' , 'http://localhost:4000/api/income']
                const requests = urls.map((url) => axios.get(url))
                const responses = await Promise.all(requests)

                setapiExpenses(responses[0].data);
                setIncome(responses[1].data)

                // let response = await client.get('expenses');
                // let incomeData = await client.get('income');
                // setapiExpenses(response.data);
                // setIncome(incomeData.data)
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


    //update expense
    const handleEditSubmit = async (id) =>{
        try{
            if (editingExpense){
                let editChange = await client.patch(`expenses/${id}`, editingExpense)
                let updatedExpenses = apiExpenses.map(expense => expense._id == id ? editChange.data : expense)
                setapiExpenses(updatedExpenses)
                setisEditingExpense(false);
                seteditingExpense({expense: '', amount: '', type: '' })
            }else {
                return;
                
            }
         
        }catch(error){
            console.log(error)
        }
    } 

    //get income to edit
    const getEditingIncome = async (id) =>{
        try{
            const response = await client.get(`income/${id}`)
            seteditingIncome(response.data)
        }catch(error){
            console.log(error)
        }
    }
    
    //add confirmation to delete 
    //add more to types list and sort alphabetically by creating function
    //add current month above table
    return(
       <div className="home-container" >
        <div className="budget-graph-container">
        <incomeContext.Provider value={{value: [income, setIncome], value3: apiExpenses, value4: client, value5: [isEditingIncome, setisEditingIncome], value6: getEditingIncome}}>
            <Budget/>
            <HomeGraph />
        </incomeContext.Provider>
        </div>
        <TableFunctions setisCreatingExpense = {setisCreatingExpense} />
        <ExpenseTable Expenses = {apiExpenses} handleDelete = {handleExpenseDelete} 
        getEditingExpense = {getEditingExpense} handleEditSubmit = {handleEditSubmit} setisEditingExpense = {setisEditingExpense}/>
        {isCreatingExpense && <NewExpenseDialog setisCreatingExpense = {setisCreatingExpense} 
            handleChange = {handleExpenseChange} types = {types} isCreatingExpense ={isCreatingExpense}
            handleSubmit = {handleNewExpenseSubmit} expenseObject = {expenseObject} 
            isEditingExpense={isEditingExpense} setisEditingExpense = {setisEditingExpense} editingExpense={editingExpense}/>}
        {isEditingExpense && <NewExpenseDialog setisCreatingExpense = {setisCreatingExpense} 
            handleChange = {handleExpenseChange} types = {types} isCreatingExpense ={isCreatingExpense}
            handleSubmit = {handleNewExpenseSubmit} expenseObject = {expenseObject} 
            isEditingExpense={isEditingExpense} setisEditingExpense = {setisEditingExpense} editingExpense={editingExpense}
            seteditingExpense={seteditingExpense} handleEditSubmit={handleEditSubmit}/>}
        {isEditingIncome && <IncomeDialog isEditingIncome = {isEditingIncome} setisEditingIncome={setisEditingIncome} editingIncome = {editingIncome}
            seteditingIncome= {seteditingIncome} getEditingIncome={getEditingIncome} client={client} income={income} setIncome = {setIncome}/>}
       </div>
    )
}