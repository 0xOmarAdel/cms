import { useParams } from "react-router-dom";
import TableDataLoading from "./Table/TableDataLoading";
import TableFetchError from "./Table/TableFetchError";
import TableSearchInput from "./Table/TableSearchInput";
import TableBadges from "./Table/TableBadges";
import TableHeading from "./Table/TableHeading";
import TableRow from "./TableRow";
import ErrorText from "../UI/ErrorText";
import PaginationHandler from "../UI/PaginationHandler";
import dynamicSort from "../utils/dynamicSort";

const Table = (props) => {
  let { page: currentPage } = useParams();
  const elementsPerPage = props.elementsPerPage
    ? props.elementsPerPage
    : props.elements.length;
  const start = currentPage ? (currentPage - 1) * elementsPerPage : 0;
  const end = currentPage ? start + elementsPerPage : props.elements?.length;

  if (props.isLoading) {
    return <TableDataLoading title={props.title} />;
  }
  if (props.error) {
    return <TableFetchError title={props.title} />;
  }

  return (
    <>
      <div className="flex flex-row">
        <div className="col-12">
          <h1 className="mb-4">{props.title}</h1>
          <div className="mb-4">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              {props.search && (
                <TableSearchInput
                  searchInputValue={props.searchInputValue}
                  searchHandler={props.searchHandler}
                />
              )}
              {props.badges && (
                <TableBadges
                  badges={props.badges}
                  activeFilter={props.activeFilter}
                  filterHandler={props.filterHandler}
                />
              )}
            </div>
          </div>
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
            <ErrorText text="Found 0 records!" />
          )}
        </div>
      </div>
      {props.pagination && (
        <div className="w-full flex flex-row">
          <PaginationHandler
            currentPage={currentPage}
            elementsPerPage={elementsPerPage}
            dataLength={props.filteredArray.length}
          />
        </div>
      )}
    </>
  );
};

export default Table;
