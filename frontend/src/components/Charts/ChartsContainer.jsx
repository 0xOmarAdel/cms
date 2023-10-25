import { useState } from "react";
import AreaChart from "./AreaChart";
import BarChart from "./BarChart";

const ChartsContainer = ({ complaintsPerMonth, usersPerMonth }) => {
  const [barChart, setBarChart] = useState(true);

  return (
    <div className="mt-16 flex flex-col items-center">
      <h4 className="text-2xl mb-2">Monthly Complaints</h4>
      <button
        className="text-lg text-sky-500"
        onClick={() => setBarChart(!barChart)}
      >
        {barChart ? "AreaChart" : "BarChart"}
      </button>
      {barChart ? (
        <BarChart data={complaintsPerMonth} />
      ) : (
        <AreaChart data={complaintsPerMonth} />
      )}

      <h4 className="mt-10 text-2xl">Monthly Users</h4>
      {barChart ? (
        <BarChart data={usersPerMonth} />
      ) : (
        <AreaChart data={usersPerMonth} />
      )}
    </div>
  );
};
export default ChartsContainer;
