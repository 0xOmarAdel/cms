import DateFormatter from "../UI/DateFormatter";
import TableLink from "./TableLink";
import StatusFormatter from "../UI/StatusFormatter";

const TableRow = ({ element, linkTo, table }) => {
  let result = [];

  let i = 0;
  for (const [, value] of Object.entries(element)) {
    result.push({
      value,
      colSize: table[i].colSize,
      label: table[i].label,
      isDate: table[i].isDate,
      isStatus: table[i].isStatus,
    });
    i++;
  }

  return (
    <div className="py-1.5 text-lg text-gray-600 tracking-tight break-words">
      <TableLink linkTo={linkTo}>
        <div className="grid grid-cols-12">
          {result.map((r, index) => (
            <div key={index} className={`hidden lg:block ${r.colSize}`}>
              {r.isDate ? (
                <p>
                  <DateFormatter date={r.value} />
                </p>
              ) : r.isStatus ? (
                <p>
                  <StatusFormatter status={r.value} />
                </p>
              ) : (
                <p>{r.value}</p>
              )}
            </div>
          ))}

          {result.map((r, index) => (
            <div key={index} className="block lg:hidden">
              {r.isDate ? (
                <p>
                  {r.label} : <DateFormatter date={r.value} />
                </p>
              ) : (
                <p>
                  {r.label} : {r.value}
                </p>
              )}
            </div>
          ))}
        </div>
      </TableLink>
    </div>
  );
};

export default TableRow;
