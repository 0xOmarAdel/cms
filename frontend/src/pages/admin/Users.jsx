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
  } = useAxios("http://localhost:5000/api/v1/users/all-users", "GET");

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

  return <Table title="Users" data={usersList} />;
};

export default Users;
