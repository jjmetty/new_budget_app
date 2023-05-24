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

    //create sum of each type
    


    const data ={
        labels: labels,
        datasets: [{
            data: []
        }]
    }

    return (
        <div className="home-graph-container content-box-shadow">
            {/* <Doughnut

            ></Doughnut> */}
        </div>
    )
}