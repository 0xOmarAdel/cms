import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import Table from "../../components/Table/Table";
import { categoriesPageGrid } from "../../data/pagesGrid";

const Categories = () => {
  const [categoriesList, setCategoriesList] = useState([]);

  const {
    data: categories,
    loading: categoriesLoading,
    error: categoriesHasError,
  } = useAxios("http://localhost:5000/api/v1/categories", "GET");

  const [sortBy, setSortBy] = useState("id");

  useEffect(() => {
    if (categories) {
      const newData = categories.map((element) => ({
        id: element._id,
        name: element.name,
        number: parseInt(element.number),
      }));

      setCategoriesList(newData);
    }
  }, [categories]);

  const sortHandler = (value) => {
    setSortBy(value);
  };

  return (
    <Table
      title="Categories"
      table={categoriesPageGrid}
      elements={categoriesList}
      pagination={false}
      isLoading={categoriesLoading}
      error={categoriesHasError}
      search={false}
      filteredArray={categoriesList}
      sortBy={sortBy}
      sortHandler={sortHandler}
    />
  );
};

export default Categories;
