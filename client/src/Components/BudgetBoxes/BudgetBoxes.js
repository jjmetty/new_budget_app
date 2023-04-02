import React from "react";
import './BudgetBoxesStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function BudgetBoxes(){
    return (
        <div className="budget-boxes-container">
            <div className="budget-box">
                <div className="box-top budget-top">
                    <p className="box-text" style={{color: 'white'}}>Income</p>
                    <FontAwesomeIcon icon="fa-solid fa-money-bill" className="box-icon" style={{color:'#85bb65'}}/>
                </div>
                <h3>2000</h3>
            </div>

            <div className="budget-box">
            <div className="box-top expense-top">
                    <p className="box-text" style={{color: 'white'}}>Expenses</p>
                    <FontAwesomeIcon icon="fa-solid fa-arrow-trend-down" className="box-icon" style={{color:'#C40233'}}/>
                </div>
                <h3>1000</h3>
            </div>

            <div className="budget-box">
            <div className="box-top remaining-top">
                    <p className="box-text" style={{color: 'white'}}>Remaining</p>
                    <FontAwesomeIcon icon="fa-solid fa-dollar-sign" className="box-icon" style={{color:'#CBE4DE'}}/>
                </div>
                <h3>500</h3>
            </div>
        </div>
    )
}