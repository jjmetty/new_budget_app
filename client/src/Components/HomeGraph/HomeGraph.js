import React, {useContext} from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import './HomeGraphStyle.css';
import { incomeContext } from "../Home/Home";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function HomeGraph(){

    const {value3, value7} = useContext(incomeContext)
    const apiExpenses = value3;
    const labels = value7;

    //shallow copy expenses to new variable
    let copyExpenses = [...apiExpenses]
    //sort expenses alphabetically by type
    let sortExpenses = copyExpenses.sort((a,b) => a.type.localeCompare(b.type));    

    let sumAmount = {}

    //loop through expense array and add all 
    for (let obj of sortExpenses){
        const {type, amount} = obj
        if (sumAmount[type]){
            sumAmount[type] += amount
        }else{
            sumAmount[type] = amount
        }
    }

    let graphLabels = Object.keys(sumAmount);

    let graphData = Object.values(sumAmount);

    const data ={
        labels: graphLabels,
        datasets: [{
            data: graphData
        }]
    }

    return (
        <div className="home-graph-container content-box-shadow">
            <Doughnut
            data = {data}
            ></Doughnut>
        </div>
    )
}