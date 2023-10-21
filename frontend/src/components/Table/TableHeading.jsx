import { FaChevronDown } from "react-icons/fa";

const TableHeading = ({ table, sortHandler, sortBy }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
          <tr className="grid grid-cols-12">
            {table.map((heading, index) => (
              <th
                key={index}
                scope="col"
                className={`${
                  heading.colSize
                } px-6 py-3 flex flex-row items-center gap-2 text-base cursor-pointer ${
                  heading.value === sortBy && "text-gray-900"
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
      </table>
    </div>
  );
};

export default TableHeading;
