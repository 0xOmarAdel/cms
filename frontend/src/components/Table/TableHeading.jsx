import { FaChevronDown } from "react-icons/fa";

const TableHeading = ({ table, sortHandler, sortBy }) => {
  return (
    <thead className="text-xs text-gray-600 uppercase bg-gray-50">
      <tr>
        {table.map((heading, index) => (
          <th
            key={index}
            scope="col"
            className={`px-6 py-3 text-base cursor-pointer ${
              heading.value === sortBy &&
              "flex flex-row items-center gap-2 text-gray-900"
            }`}
            onClick={() => sortHandler(heading.value)}
          >
            {heading.label}
            {heading.value === sortBy && (
              <FaChevronDown className="text-base" />
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeading;
