import { FaChevronDown } from "react-icons/fa";

const TableHeading = ({ table, sortHandler, sortBy }) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {table.map((heading, index) => (
              <th
                key={index}
                scope="col"
                className={`px-6 py-3 cursor-pointer ${
                  heading.value === sortBy
                    ? "text-gray-900 dark:text-white"
                    : ""
                }`}
                onClick={() => sortHandler(heading.value)}
              >
                {heading.label}
                {heading.value === sortBy && (
                  <FaChevronDown className="text-lg" />
                )}
              </th>
            ))}
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default TableHeading;
