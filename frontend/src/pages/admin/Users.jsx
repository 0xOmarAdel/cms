import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import useSearch from "../../hooks/useSearch";
import Table from "../../components/Table/Table";
import { usersPagesGrid } from "../../data/pagesGrid";

const Users = () => {
  const [usersList, setUsersList] = useState([]);

  const {
    data: users,
    loading: usersLoading,
    error: usersHasError,
  } = useAxios(
    "https://cms-complaints-api.onrender.com/api/v1/users/all-users",
    "GET"
  );

  const [sortBy, setSortBy] = useState("id");
  const { setOriginalArray, filterArray, filteredArray, inputValue } =
    useSearch("name");

  useEffect(() => {
    if (users) {
      const newData = users.map((element) => ({
        id: element._id,
        name: element.firstName + " " + element.lastName,
        email: element.email,
        phone: element.phone,
        createdAt: element.createdAt,
      }));

      setUsersList(newData);
      setOriginalArray(newData);
    }
  }, [setOriginalArray, users]);

  const searchHandler = (value) => {
    filterArray(value);
  };
  const sortHandler = (value) => {
    setSortBy(value);
  };

  return (
    <Table
      title="Users"
      table={usersPagesGrid}
      elements={usersList}
      elementsPerPage={10}
      pagination={true}
      isLoading={usersLoading}
      error={usersHasError}
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
