import { useEffect, useState } from "react";
import useSearch from "../../hooks/useSearch";
import Table from "../../components/Table";
import useAxios from "../../hooks/useAxios";

const Complaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [sortBy, setSortBy] = useState("id");
  const {
    data,
    loading: isLoading,
    error,
  } = useAxios(`http://localhost:5000/api/v1/complaints`, "GET");

  const { setOriginalArray, filterArray, filteredArray, inputValue } =
    useSearch("title");
  const [resultAfterFiler, setResultAfterFiler] = useState(filteredArray);
  const [activeFilter, setActiveFilter] = useState();

  const searchHandler = (value) => {
    filterArray(value);
    setActiveFilter(null);
  };
  const sortHandler = (value) => {
    setSortBy(value);
  };
  const filterHandler = (property, value) => {
    setResultAfterFiler(
      filteredArray.filter((element) => element[property] === value)
    );
    setActiveFilter(value);
  };

  useEffect(() => {
    if (data) {
      const newData = data.map((element) => {
        return {
          id: element._id,
          title: element.title,
          category: element.category,
          user: element.user,
          date_created: element.date_created,
          status: element.status,
        };
      });
      console.log(data);
      console.log(newData);
      setComplaints(newData);
      setOriginalArray(newData);
    }
  }, [data]);

  useEffect(() => {
    setResultAfterFiler(filteredArray);
  }, [filteredArray]);

  const table = [
    { colSize: 2, label: "ID", value: "id" },
    { colSize: 3, label: "Title", value: "title" },
    { colSize: 2, label: "Category", value: "categoryName" },
    { colSize: 2, label: "User", value: "userName" },
    { colSize: 2, label: "Created At", value: "date_created", isDate: true },
    { colSize: 1, label: "Status", value: "status", isStatus: true },
  ];

  const badges = [
    { label: "Pending", attr: "status", value: "0" },
    { label: "Closed", attr: "status", value: "1" },
  ];

  return (
    <Table
      title="Complaints"
      searchInputValue={inputValue}
      searchHandler={searchHandler}
      elementsPerPage={10}
      pagination={true}
      sortBy={sortBy}
      sortHandler={sortHandler}
      filterHandler={filterHandler}
      filteredArray={resultAfterFiler}
      badges={badges}
      activeFilter={activeFilter}
      search={true}
      isLoading={isLoading}
      error={error}
      elements={complaints}
      linkTo="/admin/complaint/"
      table={table}
    />
  );
};

export default Complaints;
