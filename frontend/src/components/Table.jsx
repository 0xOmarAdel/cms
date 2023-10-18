import React from "react";
import SearchBar from "../UI/SearchBar";
import Badge from "../UI/Badge";
import TableHeading from "./TableHeading";
import TableRow from "./TableRow";
import dynamicSort from "../utils/dynamicSort";
import NoRecords from "./NoRecords";
import Loading from "../UI/Loading";
import { useParams } from "react-router-dom";
import PaginationHandler from "../UI/PaginationHandler";

const Table = (props) => {
  let { page: currentPage } = useParams();
  const elementsPerPage = props.elementsPerPage
    ? props.elementsPerPage
    : props.elements.length;
  const start = currentPage ? (currentPage - 1) * elementsPerPage : 0;
  const end = currentPage ? start + elementsPerPage : props.elements?.length;

  if (props.isLoading) {
    return <Loading />;
  }
  if (props.error) {
    return props.error;
  }
  if (props.elements.length === 0) {
    return <NoRecords title="Complaints" />;
  }

  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1 className="mb-4">{props.title}</h1>
          {props.search && (
            <div className="mb-3">
              <div className="row">
                {props.search && (
                  <div className="col-lg-4 col-sm-6 col-xs-12 ps-0 pd">
                    <SearchBar
                      value={props.searchInputValue}
                      onChange={(e) => props.searchHandler(e.target.value)}
                    />
                  </div>
                )}
                {props.badges && (
                  <div className="col-auto d-flex align-items-center">
                    <ul className=" d-flex">
                      {props.badges.map((badge, index) => (
                        <li key={index}>
                          {props.activeFilter === badge.value ? (
                            <Badge
                              className="me-3 active"
                              text={badge.label}
                              onClick={() =>
                                props.filterHandler(badge.attr, badge.value)
                              }
                            />
                          ) : (
                            <Badge
                              className="me-3"
                              text={badge.label}
                              onClick={() =>
                                props.filterHandler(badge.attr, badge.value)
                              }
                            />
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
          {props.filteredArray.length !== 0 ? (
            <>
              <TableHeading
                table={props.table}
                sortBy={props.sortBy}
                sortHandler={props.sortHandler}
              />
              {props.filteredArray
                .sort(dynamicSort(props.sortBy))
                .slice(start, end)
                .map((element) => (
                  <TableRow
                    key={element.id}
                    element={element}
                    table={props.table}
                    linkTo={props.linkTo ? props.linkTo + element.id : ""}
                  />
                ))}
            </>
          ) : (
            <p className="error-text">Found 0 records!</p>
          )}
        </div>
      </div>
      {props.pagination ? (
        <div className="row">
          <div className="col-12">
            <PaginationHandler
              currentPage={currentPage}
              elementsPerPage={elementsPerPage}
              dataLength={props.filteredArray.length}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Table;
