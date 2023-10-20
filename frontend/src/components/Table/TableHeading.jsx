import { FaChevronDown } from "react-icons/fa";

const TableHeading = ({ table, sortHandler, sortBy }) => {
  return (
    <div className="mb-3 pb-1.5 hidden lg:grid lg:grid-cols-12 border-b-[0.5px] border-gray-400">
      {table.map((heading, index) => (
        <div className={heading.colSize} key={index}>
          <p
            className="flex flex-row  items-center gap-3 text-xl font-semibold cursor-pointer"
            onClick={() => sortHandler(heading.value)}
          >
            {heading.label}
            {heading.value === sortBy && <FaChevronDown className="text-lg" />}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TableHeading;
