import React, { useCallback, useEffect, useState } from "react";
import useHTTP from "../../hooks/useHttp";
import Table from "../../components/Table";

const Admins = () => {
  const [admins, setAdmins] = useState([]);
  const [sortBy, setSortBy] = useState("id");
  const { isLoading, error, sendRequest: getAdmins } = useHTTP();

  const sortHandler = (value) => {
    setSortBy(value);
  };

  useEffect(() => {
    getAdmins({ url: "http://localhost:80/cms-api/admins.php" }, (data) => {
      setAdmins(
        data.map((element) => ({ ...element, id: parseInt(element.id) }))
      );
    });
  }, [getAdmins]);

  const table = [
    { colSize: 2, label: "ID", value: "id" },
    { colSize: 3, label: "Name", value: "name" },
    { colSize: 3, label: "Email", value: "email" },
    { colSize: 2, label: "Phone", value: "phone" },
    { colSize: 2, label: "Created At", value: "created_at", isDate: true },
  ];

  return (
    <Table
      title="Admins"
      table={table}
      elements={admins}
      pagination={false}
      isLoading={isLoading}
      error={error}
      search={false}
      filteredArray={admins}
      sortBy={sortBy}
      sortHandler={sortHandler}
    />
  );
};

export default Admins;
