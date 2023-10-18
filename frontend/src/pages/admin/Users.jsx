import React, { useCallback, useEffect, useState } from "react";
import useHTTP from "../../hooks/useHttp";
import useSearch from "../../hooks/useSearch";
import Table from "../../components/Table";
import useAxios from "../../hooks/useAxios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [sortBy, setSortBy] = useState("id");
  const { setOriginalArray, filterArray, filteredArray, inputValue } =
    useSearch("name");

  const searchHandler = (value) => {
    filterArray(value);
  };
  const sortHandler = (value) => {
    setSortBy(value);
  };

  // useEffect(() => {
  //   getUsers({ url: "http://localhost:80/cms-api/users.php" }, (data) => {
  //     setUsers(
  //       data.map((element) => ({ ...element, id: parseInt(element.id) }))
  //     );
  //     setOriginalArray(
  //       data.map((element) => ({ ...element, id: parseInt(element.id) }))
  //     );
  //   });
  // }, [getUsers]);

  const {
    data: totalUsers,
    loading: totalUsersIsLoading,
    error: totalUsersHasError,
  } = useAxios("http://localhost:5000/api/v1/users/all-users", "GET");

  const table = [
    { colSize: 1, label: "ID", value: "id" },
    { colSize: 2, label: "Name", value: "name" },
    { colSize: 3, label: "Email", value: "email" },
    { colSize: 2, label: "Phone", value: "phone" },
    { colSize: 2, label: "Created At", value: "created_at", isDate: true },
  ];
  return (
    <Table
      title="Users"
      table={table}
      elements={totalUsers?.users}
      elementsPerPage={10}
      pagination={true}
      isLoading={totalUsersIsLoading}
      error={totalUsersHasError}
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
