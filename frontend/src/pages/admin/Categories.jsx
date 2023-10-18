import { useEffect, useState } from "react";
import useHTTP from "../../hooks/useHttp";
import Table from "../../components/Table";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [sortBy, setSortBy] = useState("_id");
  const { isLoading, error, sendRequest: getCategories } = useHTTP();

  const sortHandler = (value) => {
    setSortBy(value);
  };

  useEffect(() => {
    getCategories(
      { url: "http://localhost:5000/api/v1/categories" },
      (data) => {
        console.log(data);
        setCategories(
          data.map((element) => ({
            id: element._id,
            name: element.name,
            number: parseInt(element.number),
          }))
        );
      }
    );
  }, [getCategories]);

  const table = [
    { colSize: 3, label: "ID", value: "id" },
    { colSize: 5, label: "Title", value: "name" },
    { colSize: 4, label: "Complaints", value: "number" },
  ];

  return (
    <Table
      title="Categories"
      table={table}
      elements={categories}
      pagination={false}
      isLoading={isLoading}
      error={error}
      search={false}
      filteredArray={categories}
      sortBy={sortBy}
      sortHandler={sortHandler}
    />
  );
};

export default Categories;
