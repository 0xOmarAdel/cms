import { useState } from "react";
import AreaChart from "./AreaChart";
import BarChart from "./BarChart";
import "./ChartsContainer.css";
import useAxios from "../hooks/useAxios";

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const {
    data: complaintsPerMonth,
    loading: complaintsPerMonthLoading,
    error: complaintsPerMonthHasError,
  } = useAxios(
    "http://localhost:5000/api/v1/complaints/complaints-per-month",
    "GET"
  );

  const {
    data: usersPerMonth,
    loading: usersPerMonthLoading,
    error: usersPerMonthHasError,
  } = useAxios("http://localhost:5000/api/v1/users/users-per-month", "GET");

  console.log(usersPerMonth);

  return (
    <div className="charts-container">
      <h4 style={{ fontSize: "1.5rem" }}>Monthly Complaints</h4>
      <button onClick={() => setBarChart(!barChart)}>
        {barChart ? "AreaChart" : "BarChart"}
      </button>
      {barChart ? (
        <BarChart data={complaintsPerMonth} />
      ) : (
        <AreaChart data={complaintsPerMonth} />
      )}

      <h4 style={{ marginTop: "40px", fontSize: "1.5rem" }}>Monthly Users</h4>
      {barChart ? (
        <BarChart data={usersPerMonth} />
      ) : (
        <AreaChart data={usersPerMonth} />
      )}
    </div>
  );
};
export default ChartsContainer;
