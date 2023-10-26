import { useParams } from "react-router-dom";
import TableFetchError from "./TableFetchError";
import TableSearchInput from "./TableSearchInput";
import TableBadges from "./TableBadges";
import TableHeading from "./TableHeading";
import TableRow from "./TableRow";
import ErrorText from "../../UI/ErrorText";
import PaginationHandler from "../../UI/PaginationHandler";
import dynamicSort from "../../utils/dynamicSort";
import Loading from "../../UI/Loading";

const Table = ({
  title,
  elements,
  elementsPerPage,
  isLoading,
  error,
  search,
  searchInputValue,
  searchHandler,
  badges,
  activeFilter,
  filterHandler,
  filteredArray,
  pagination,
  sortBy,
  sortHandler,
  table,
}) => {
  let { page: currentPage } = useParams();
  const epp = elementsPerPage || elements.length;
  const start = currentPage ? (currentPage - 1) * epp : 0;
  const end = currentPage ? start + epp : elements?.length;

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <TableFetchError title={title} />;
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold tracking-wide">{title}</h1>
        {(search || badges) && (
          <div className="flex flex-col gap-4">
            {search && (
              <TableSearchInput
                searchInputValue={searchInputValue}
                searchHandler={searchHandler}
              />
            )}
            {badges && (
              <TableBadges
                badges={badges}
                activeFilter={activeFilter}
                filterHandler={filterHandler}
              />
            )}
          </div>
        )}
        {filteredArray.length !== 0 ? (
          <div className="relative overflow-x-auto shadow-md">
            <table className="w-full text-sm text-left text-gray-500">
              <TableHeading
                table={table}
                sortHandler={sortHandler}
                sortBy={sortBy}
              />
              <tbody>
                {filteredArray
                  .sort(dynamicSort(sortBy))
                  .slice(start, end)
                  .map((item) => (
                    <TableRow key={item.id} element={item} table={table} />
                  ))}
              </tbody>
            </table>
          </div>
        ) : (
          <ErrorText text="Found no records!" className="!text-xl" />
        )}
      </div>
      {pagination && (
        <div className="w-full mt-5 flex flex-row">
          <PaginationHandler
            currentPage={currentPage}
            elementsPerPage={elementsPerPage}
            dataLength={filteredArray.length}
          />
        </div>
      )}
    </>
  );
};

export default Table;
