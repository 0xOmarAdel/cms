import TableLink from "./TableLink";
import DateFormatter from "../../UI/DateFormatter";
import StatusFormatter from "../../UI/StatusFormatter";

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

  console.log(result);

  return (
    <TableLink linkTo={linkTo}>
      <tr className="bg-white border-b">
        {result.map((item) => (
          <td key={item.value} className="px-6 py-4">
            {item.value}
          </td>
        ))}
      </tr>
    </TableLink>
  );
};

export default TableRow;
