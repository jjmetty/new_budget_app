import React from "react";
import './IncomeDialogStyle.css'

export default function IncomeDialog({isEditingIncome, setisEditingIncome, editingIncome, seteditingIncome, client, income, setIncome}){

    //handle income change for edit
    const handleEditChange = (e) =>{
        let {name ,value} = e.target;
        seteditingIncome({...editingIncome, [name]: value})
    }

    const handleEditIncomeSubmit = async (id) => {
        try{
            if (editingIncome.income.length > 0){
                let editChange = await client.patch(`income/${id}`, editingIncome)
                let updatedIncome = income.map(i => i._id == id ? editChange.data : i)
                setIncome(updatedIncome);
                setisEditingIncome(false);
                seteditingIncome({income: 0})
            }else {
                return;
                
            }
         
        }catch(error){
            console.log(error)
        }
    }

    return(
        <>
        <div className="income-modal"> 
                <div className="top-container">
                <div className="vertical-bar"></div>
                <h3 className="expense-text">{isEditingIncome ? "Edit Income" : "New Income"}</h3>
                </div>
                <form>
                <div className="modal-content">
                <div className="input-container"> 
                <div className="dialog-expense-label">
                <input type='number' name ='income'  className="new-expense-input expense-input" value={editingIncome.income} onChange={handleEditChange} required/> 
                </div>
                </div>
                <div className="dialog-button-layout">
             
                <button className="dialog-expense-button" type="button" onClick={() => handleEditIncomeSubmit(editingIncome._id)}>Save</button>
                
                
                <button className="dialog-expense-button" onClick={() => setisEditingIncome(false)}>Cancel</button>
                </div>
                
            </div>
            </form>
        </div>
        <div className="overlay" onClick={() => setisEditingIncome(false)}></div> 
        
        </>
    )
}