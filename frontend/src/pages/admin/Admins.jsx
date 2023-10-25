import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import Table from "../../components/Table/Table";
import { adminsPageGrid } from "../../data/pagesGrid";

const Admins = () => {
  const [adminsList, setAdminsList] = useState([]);

  const {
    data: admins,
    loading: adminsLoading,
    error: adminsHasError,
  } = useAxios("http://localhost:5000/api/v1/users/all-admins", "GET");

  const [sortBy, setSortBy] = useState("id");

  useEffect(() => {
    if (admins) {
      const newData = admins.map((element) => ({
        id: element._id,
        name: element.firstName + " " + element.lastName,
        email: element.email,
        phone: element.phone,
        createdAt: element.createdAt,
      }));

      setAdminsList(newData);
    }
  }, [admins]);

  const sortHandler = (value) => {
    setSortBy(value);
  };
  return <Table title="Admins" data={adminsList} />;
};

export default Admins;
