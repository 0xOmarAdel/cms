import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function Chart(props) {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let result = [];

  for (const [, value] of Object.entries(labels)) {
    let val = 0;
    for (var x in props.data) {
      if (value === props.data[x].month) {
        val = parseInt(props.data[x].total);
      }
    }
    result.push(val);
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: props.label,
        data: result,
        backgroundColor: "#0056b3",
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
