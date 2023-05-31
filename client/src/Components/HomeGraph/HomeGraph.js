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
                'rgba(46, 204, 113, 0.7)',
                'rgba(149, 165, 166, 0.7)',
                'rgba(52, 152, 219, 0.7)',
                'rgba(231, 76, 60, 0.7)',
                'rgba(155, 89, 182, 0.7)',
                'rgba(236, 112, 99, 0.7)',
                'rgba(44, 62, 80, 0.7)',
                'rgba(102, 204, 153, 0.7)',
                'rgba(165, 105, 79, 0.7)',
                'rgba(241, 196, 15, 0.7)'
              ],
              borderColor: [
                'rgba(46, 204, 113, 1)',
                'rgba(149, 165, 166, 1)',
                'rgba(52, 152, 219, 1)',
                'rgba(231, 76, 60, 1)',
                'rgba(155, 89, 182, 1)',
                'rgba(236, 112, 99, 1)',
                'rgba(44, 62, 80, 1)',
                'rgba(102, 204, 153, 1)',
                'rgba(165, 105, 79, 1)',
                'rgba(241, 196, 15, 1)'
              ],
              borderWidth: 1,
        }]
    }

    const options = {
        responsive: true,
        aspectRatio: 2.5,
        plugins: {
            legend: {
                position: "right"
            }
        },
        layout: {
            padding: {
                top: 10,
                bottom: 10,
            }
        }
    }

    return (
        <div className="home-graph-container content-box-shadow">
                <Doughnut
                data = {data} options={options} 
                ></Doughnut>
        </div>
    )
}