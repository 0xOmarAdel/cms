import { useCallback, useEffect, useState } from "react";

import "./Dashboard.css";
import { Chart } from "../../UI/Chart";
import useHTTP from "../../hooks/useHttp";
import Loading from "../../UI/Loading";
import useAxios from "../../hooks/useAxios";

const Dashboard = () => {
  // const cards = [
  //   { icon: "fa-solid fa-users" },
  //   { icon: "fa-solid fa-user-shield" },
  //   { icon: "fa-solid fa-envelope" },
  //   { icon: "fa-solid fa-list" },
  // ];

  console.log("first");

  // const [totalComplaints, setTotalComplaints] = useState([]);
  // const {
  //   isLoading: totalComplaintsIsLoading,
  //   error: totalComplaintsHasError,
  //   sendRequest: getTotalComplaints,
  // } = useHTTP();

  // const [totalUsers, setTotalUsers] = useState([]);
  // const {
  //   isLoading: totalUsersIsLoading,
  //   error: totalUsersHasError,
  //   sendRequest: getTotalUsers,
  // } = useHTTP();

  // const [totalNumbers, setTotalNumbers] = useState([]);
  // const {
  //   isLoading: totalNumbersIsLoading,
  //   error: totalNumbersHasError,
  //   sendRequest: getTotalNumbers,
  // } = useHTTP();

  // const totalComplaintsHandler = useCallback((data) => {
  //   setTotalComplaints(data);
  // }, []);

  // const totalUsersHandler = useCallback((data) => {
  //   setTotalUsers(data);
  // }, []);

  // let result = [];
  // let i = 0;

  // const totalNumbersHandler = useCallback((data) => {
  //   setTotalNumbers(data);

  //   for (const [, value] of Object.entries(data)) {
  //     for (var v in value) {
  //       result.push({
  //         label: Object.keys(value[v])[0],
  //         total: parseInt(Object.values(value[v])[0]),
  //         cardIcon: cards[i].icon,
  //       });
  //     }

  //     setTotalNumbers(result);
  //     i++;
  //   }
  // }, []);

  // useEffect(() => {
  //   getTotalComplaints(
  //     { url: "http://localhost:5000/api/v1/complaints/complaints-per-month" },
  //     totalComplaintsHandler
  //   );
  //   getTotalUsers(
  //     { url: "http://localhost:5000/api/v1/users/users-per-month" },
  //     totalUsersHandler
  //   );
  // }, [
  //   getTotalComplaints,
  //   totalComplaintsHandler,
  //   getTotalUsers,
  //   totalUsersHandler,
  //   getTotalNumbers,
  //   totalNumbersHandler,
  // ]);

  const {
    data: totalComplaints,
    loading: totalComplaintsIsLoading,
    error: totalComplaintsHasError,
  } = useAxios("http://localhost:5000/api/v1/complaints", "GET");
  console.log(totalComplaints);

  const {
    data: totalUsers,
    loading: totalUsersIsLoading,
    error: totalUsersHasError,
  } = useAxios("http://localhost:5000/api/v1/users/all-users", "GET");

  console.log(totalUsers);

  return (
    <div className="admins">
      <h1 className="mb-5">Dashboard</h1>
      <div className="cards">
        {/* <div className="row">
          {totalNumbers.map((item, index) => (
            <div className="col-12 col-sm-6 col-lg-3 mb-4" key={index}>
              <div className="card">
                <i className={item.cardIcon}></i>
                <p className="card-title">{item.label}</p>
                <p className="card-number">{item.total}</p>
              </div>
            </div>
          ))}
        </div> */}

        {/* <div className="row mt-5">
          <div className="col-12 col-xl-6">
            <Chart label="Complaints" data={totalComplaints?.count} />
          </div>
          <div className="col-12 col-xl-6">
            <Chart label="Users" data={totalUsers.count} />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
