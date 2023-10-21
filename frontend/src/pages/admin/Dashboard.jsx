import { useEffect, useState, useMemo } from "react";
import useAxios from "../../hooks/useAxios";
import Loading from "../../UI/Loading";
import ChartsContainer from "../../components/Charts/ChartsContainer";
import { FaUserShield, FaListUl, FaEnvelope, FaUsers } from "react-icons/fa6";
import TableFetchError from "../../components/Table/TableFetchError";

const Dashboard = () => {
  const cards = useMemo(
    () => [
      { label: "Admins", icon: <FaUserShield className="text-4xl" /> },
      { label: "Categories", icon: <FaListUl className="text-4xl" /> },
      { label: "Complaints", icon: <FaEnvelope className="text-4xl" /> },
      { label: "Users", icon: <FaUsers className="text-4xl" /> },
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
    return <TableFetchError title="Dashboard" />;
  }

  return (
    <>
      <h1 className="mb-5 text-3xl font-semibold tracking-wide">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {totals?.map((item, index) => (
          <div
            className="py-8 flex flex-col items-center gap-3 bg-gray-300 rounded-lg text-gray-600 font-semibold tracking-wider"
            key={index}
          >
            {item.icon}
            <p className="text-xl">{item.label}</p>
            <p className="text-2xl">{item.total}</p>
          </div>
        ))}
      </div>
      <ChartsContainer
        complaintsPerMonth={complaintsPerMonth}
        usersPerMonth={usersPerMonth}
      />
    </>
  );
};

export default Dashboard;
