import React, { useCallback, useEffect, useState } from "react";
import useHTTP from "../../hooks/useHttp";
import useSearch from "../../hooks/useSearch";
import Table from "../../components/Table";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [sortBy, setSortBy] = useState("id");
  const { isLoading, error, sendRequest: getUsers } = useHTTP();
  const { setOriginalArray, filterArray, filteredArray, inputValue } =
    useSearch("name");

  const searchHandler = (value) => {
    filterArray(value);
  };
  const sortHandler = (value) => {
    setSortBy(value);
  };

  useEffect(() => {
    getUsers({ url: "http://localhost:80/cms-api/users.php" }, (data) => {
      setUsers(
        data.map((element) => ({ ...element, id: parseInt(element.id) }))
      );
      setOriginalArray(
        data.map((element) => ({ ...element, id: parseInt(element.id) }))
      );
    });
  }, [getUsers]);

  const table = [
    { colSize: 1, label: "ID", value: "id" },
    { colSize: 2, label: "National ID", value: "nationalId" },
    { colSize: 2, label: "Name", value: "name" },
    { colSize: 3, label: "Email", value: "email" },
    { colSize: 2, label: "Phone", value: "phone" },
    { colSize: 2, label: "Created At", value: "created_at", isDate: true },
  ];

  return (
    <Table
      title="Users"
      table={table}
      elements={users}
      elementsPerPage={10}
      pagination={true}
      isLoading={isLoading}
      error={error}
      search={true}
      searchInputValue={inputValue}
      searchHandler={searchHandler}
      filteredArray={filteredArray}
      sortBy={sortBy}
      sortHandler={sortHandler}
      badges={false}
    />
  );
};

export default Users;
