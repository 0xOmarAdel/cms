import SortIcon from "../../UI/SortIcon";

const TableHeading = ({ table, sortHandler, sortBy }) => {
  return (
    <thead className="text-xs text-gray-500 uppercase bg-gray-50">
      <tr>
        {table.map((heading, index) => (
          <th
            key={index}
            scope="col"
            className={`px-6 py-3 text-base cursor-pointer transition duration-500 hover:text-gray-700 ${
              heading.value === sortBy &&
              "flex flex-row items-center gap-1 text-gray-700"
            }`}
            onClick={() => sortHandler(heading.value)}
          >
            {heading.label}
            {heading.value === sortBy && <SortIcon />}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeading;
