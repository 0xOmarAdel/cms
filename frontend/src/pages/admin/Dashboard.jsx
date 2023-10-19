import { useEffect, useState, useMemo } from "react";
import useAxios from "../../hooks/useAxios";
import { Chart } from "../../UI/Chart";
import Loading from "../../UI/Loading";
import "./Dashboard.css";
import ChartsContainer from "../../components/ChartsContainer";

const Dashboard = () => {
  const cards = useMemo(
    () => [
      { label: "Admins", icon: "fa-solid fa-user-shield" },
      { label: "Categories", icon: "fa-solid fa-list" },
      { label: "Complaints", icon: "fa-solid fa-envelope" },
      { label: "Users", icon: "fa-solid fa-users" },
    ],
    []
  );

  const [totals, setTotals] = useState();
  const [totalsLoading, setTotalsLoading] = useState(true);

  const { data: totalNumbers, error: totalNumbersHasError } = useAxios(
    `http://localhost:5000/api/v1/total-numbers`,
    "GET"
  );

  useEffect(() => {
    if (totalNumbers) {
      const mergedArray = cards.map((card, index) => {
        const total = Object.values(totalNumbers)[index];
        return { ...card, total };
      });

      setTotals(mergedArray);
      setTotalsLoading(false);
    }
  }, [cards, totalNumbers]);

  const {
    data: complaintsPerMonth,
    loading: complaintsPerMonthLoading,
    error: complaintsPerMonthHasError,
  } = useAxios(
    `http://localhost:5000/api/v1/complaints/complaints-per-month`,
    "GET"
  );

  const {
    data: usersPerMonth,
    loading: usersPerMonthLoading,
    error: usersPerMonthHasError,
  } = useAxios(`http://localhost:5000/api/v1/users/users-per-month`, "GET");

  if (totalsLoading || complaintsPerMonthLoading || usersPerMonthLoading) {
    return <Loading />;
  }

  if (
    totalNumbersHasError ||
    complaintsPerMonthHasError ||
    usersPerMonthHasError
  ) {
    return <div>An error occurred.</div>;
  }

  return (
    <div className="admins">
      <h1 className="mb-5">Dashboard</h1>
      <div className="cards">
        <div className="row">
          {totals.map((item, index) => (
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
          <ChartsContainer />
          {/* <div className="col-12 col-xl-6">
            <Chart label="Complaints" data={complaintsPerMonth} />
          </div>
          <div className="col-12 col-xl-6">
            <Chart label="Users" data={usersPerMonth} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
