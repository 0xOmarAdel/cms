import React, { useCallback, useEffect, useState } from "react";

import "./Dashboard.css";
import { Chart } from "../../UI/Chart";
import useHTTP from "../../hooks/useHttp";
import Loading from "../../UI/Loading";

const Dashboard = () => {
  const cards = [
    { icon: "fa-solid fa-users" },
    { icon: "fa-solid fa-user-shield" },
    { icon: "fa-solid fa-envelope" },
    { icon: "fa-solid fa-list" },
  ];

  const [totalComplaints, setTotalComplaints] = useState([]);
  const {
    isLoading: totalComplaintsIsLoading,
    error: totalComplaintsHasError,
    sendRequest: getTotalComplaints,
  } = useHTTP();

  const [totalUsers, setTotalUsers] = useState([]);
  const {
    isLoading: totalUsersIsLoading,
    error: totalUsersHasError,
    sendRequest: getTotalUsers,
  } = useHTTP();

  const [totalNumbers, setTotalNumbers] = useState([]);
  const {
    isLoading: totalNumbersIsLoading,
    error: totalNumbersHasError,
    sendRequest: getTotalNumbers,
  } = useHTTP();

  const totalComplaintsHandler = useCallback((data) => {
    setTotalComplaints(data);
  }, []);

  const totalUsersHandler = useCallback((data) => {
    setTotalUsers(data);
  }, []);

  let result = [];
  let i = 0;

  const totalNumbersHandler = useCallback((data) => {
    setTotalNumbers(data);

    for (const [, value] of Object.entries(data)) {
      for (var v in value) {
        result.push({
          label: Object.keys(value[v])[0],
          total: parseInt(Object.values(value[v])[0]),
          cardIcon: cards[i].icon,
        });
      }

      setTotalNumbers(result);
      i++;
    }
  }, []);

  useEffect(() => {
    getTotalComplaints(
      { url: "http://localhost:80/cms-api/complaintsPerMonth.php" },
      totalComplaintsHandler
    );
    getTotalUsers(
      { url: "http://localhost:80/cms-api/usersPerMonth.php" },
      totalUsersHandler
    );
    getTotalNumbers(
      { url: "http://localhost:80/cms-api/getTotalNumbers.php" },
      totalNumbersHandler
    );
  }, [
    getTotalComplaints,
    totalComplaintsHandler,
    getTotalUsers,
    totalUsersHandler,
    getTotalNumbers,
    totalNumbersHandler,
  ]);

  if (
    totalComplaintsIsLoading ||
    totalUsersIsLoading ||
    totalNumbersIsLoading
  ) {
    return <Loading />;
  }

  if (totalComplaintsHasError || totalUsersHasError || totalNumbersHasError) {
    return <div>An error occurred.</div>;
  }

  return (
    <div className="admins">
      <h1 className="mb-5">Dashboard</h1>
      <div className="cards">
        <div className="row">
          {totalNumbers.map((item, index) => (
            <div className="col-12 col-sm-6 col-lg-3 mb-4" key={index}>
              <div className="card">
                <i className={item.cardIcon}></i>
                <p className="card-title">{item.label}</p>
                <p className="card-number">{item.total}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-5">
          <div className="col-12 col-xl-6">
            <Chart label="Complaints" data={totalComplaints} />
          </div>
          <div className="col-12 col-xl-6">
            <Chart label="Users" data={totalUsers} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
