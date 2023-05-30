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

    //labels sorted alphabetically
    //.map(x => x + `${x.amount}`) add to show percentage of graph
    let graphLabels = Object.keys(sumAmount);

    //data sorted alphabetically
    let graphData = Object.values(sumAmount);

    const data ={
        labels: graphLabels,
        datasets: [{
            data: graphData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(73, 180, 20, 0.2)',
                'rgba(100, 50, 80, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(73, 180, 20, 1)',
                'rgba(100, 50, 80, 1)'
              ],
              borderWidth: 1,
        }]
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "right"
            }
        }
    }

    return (
        <div className="home-graph-container content-box-shadow">
            <div className="graph-wrapper">
                <Doughnut
                data = {data} options={options} 
                ></Doughnut>
            </div>
        </div>
    )
}