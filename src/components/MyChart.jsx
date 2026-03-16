import React from 'react';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { _isPointInArea } from 'chart.js/helpers';
import { Chart } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

Chart.defaults.font.family = 'Manrope';
Chart.defaults.font.size = 12;

// Chart options (legend hidden)
const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false // Hides the label box
        },
        title: {
            display: false,
            text: 'Simple Line Chart'
        }
    }
};

export default function MyLineChart(props) {
    // console.log(props.diagnosis_history[0].month)

    // THESE ARE THE LOOPS TO SCRAPE THE DATA WE NEED FOR THE LINE GRAPH.
    // Looping through JSON -> diagnosis_history array. Collecting and storing values for 
    // "month","year","systolic value", and 'diastolic value' and storing them in their own arrays
    // Then reversing all arrays because data from JSON is presened newest to oldest, making time move backwards on our graph :/

    // Month Data Array
    const reversedMonthArray = [];
    for (let i = 0; i < props.diagnosis_history.length; i++) {
        reversedMonthArray.push(props.diagnosis_history[i].month)
    }
    const correctMonthArray = reversedMonthArray.reverse()
    console.log("Array of months:", correctMonthArray)

    // Year Data Array
    const reversedYearArray = [];
    for (let i = 0; i < props.diagnosis_history.length; i++) {
        reversedYearArray.push(props.diagnosis_history[i].year)
    }
    const correctYearArray = (reversedYearArray.reverse())
    console.log("Array of years:", correctYearArray)

    // Systolic Data Array
    const reversedSystolicArray = []
    for (let i = 0; i < props.diagnosis_history.length; i++) {
        reversedSystolicArray.push(props.diagnosis_history[i].blood_pressure.systolic.value)
    }
    // console.log("Systolic Array Reverse:", reversedSystolicArray)
    const correctSystolicArray = reversedSystolicArray.reverse()
    console.log("Systolic Array Data:", correctSystolicArray)

    // Diastolic Data Array
    const reversedDiastolicArray = []
    for (let i = 0; i < props.diagnosis_history.length; i++) {
        reversedDiastolicArray.push(props.diagnosis_history[i].blood_pressure.diastolic.value)
    }
    const correctDiastolicArray = reversedDiastolicArray.reverse()
    console.log("Diastolic Array Data:", correctDiastolicArray)

    // Combining month and year arrays into a single array
    const dateArray = []
    for (let i = 0; i < correctMonthArray.length; i++) {
        dateArray.push(correctMonthArray[i].slice(0, 3) + ", " + correctYearArray[i])
    }
    console.log(dateArray)

    // Inserting data arrays from above and aestheticizing the graph
    const data = {
        labels: dateArray,
        datasets: [
            {
                label: 'Systolic Data',
                data: correctSystolicArray,
                borderColor: '#C26EB4',
                backgroundColor: 'rgba(75,192,192,0.2)',
                tension: 0.4, // Makes the line curved
                pointRadius: 5,
                pointBackgroundColor: '#E66FD2',
                pointBorderColor: '#FFFFFF'
            },
            {
                label: 'Diastolic Data',
                data: correctDiastolicArray,
                borderColor: '#7E6CAB',
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: '#8C6FE6',
                pointBorderColor: '#FFFFFF'
            }
        ]

    };

    return <Line options={options} data={data} />;
}