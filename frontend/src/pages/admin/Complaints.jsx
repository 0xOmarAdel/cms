import React, { useCallback, useEffect, useState } from "react";
import useSearch from "../../hooks/useSearch";
import useHttp from "../../hooks/useHttp";
import Table from "../../components/Table";

const Complaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [sortBy, setSortBy] = useState("id");
  const { isLoading, error, sendRequest: getComplaints } = useHttp();
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
    getComplaints(
      { url: "http://localhost:80/cms-api/complaints.php" },
      (data) => {
        setComplaints(
          data.map((element) => ({ ...element, id: parseInt(element.id) }))
        );
        setOriginalArray(
          data.map((element) => ({ ...element, id: parseInt(element.id) }))
        );
      }
    );
  }, [getComplaints]);

  useEffect(() => {
    setResultAfterFiler(filteredArray);
  }, [filteredArray]);

  const table = [
    { colSize: 1, label: "ID", value: "id" },
    { colSize: 3, label: "Title", value: "title" },
    { colSize: 2, label: "Category", value: "categoryName" },
    { colSize: 2, label: "User", value: "userName" },
    { colSize: 2, label: "Created At", value: "date_created", isDate: true },
    { colSize: 2, label: "Status", value: "status", isStatus: true },
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
