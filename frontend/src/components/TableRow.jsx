import React from "react";
import DateFormatter from "../UI/DateFormatter";
import TableLink from "./TableLink";
import StatusFormatter from "../UI/StatusFormatter";

const TableRow = ({ element, linkTo, table }) => {
  let result = [];

  let i = 0;
  for (const [, value] of Object.entries(element)) {
    result.push([
      value,
      table[i].colSize,
      table[i].label,
      table[i].isDate,
      table[i].isStatus,
    ]);
    i++;
  }

  return (
    <div className="table-row py-3">
      <TableLink linkTo={linkTo}>
        <div className="row">
          {result.map((r, index) => (
            <div key={index} className={`d-none d-lg-block col-${r[1]}`}>
              {r[3] ? (
                <p>
                  <DateFormatter date={r[0]} />
                </p>
              ) : r[4] ? (
                <p>
                  <StatusFormatter status={r[0]} />
                </p>
              ) : (
                <p>{r[0]}</p>
              )}
            </div>
          ))}

          {result.map((r, index) => (
            <div key={index} className="d-block d-lg-none col-12">
              {r[3] ? (
                <p>
                  {r[2]} : <DateFormatter date={r[0]} />
                </p>
              ) : (
                <p>
                  {r[2]} : {r[0]}
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
