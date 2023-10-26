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
import SortIcon from "../../UI/SortIcon";

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
      <div className="">
        <h1 className="text-3xl font-semibold tracking-wide">{title}</h1>
        <div className="">
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
        <div className="relative overflow-x-auto shadow-md mt-4">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                {title === "Categories" ? (
                  <>
                    <th scope="col" className="px-6 py-3">
                      CATEGORY
                    </th>
                    <th scope="col" className="px-6 py-3">
                      COMPLAINTS
                    </th>
                  </>
                ) : title === "Complaints" ? (
                  <>
                    <th scope="col" className="px-6 py-3">
                      TITLE
                    </th>
                    <th scope="col" className="px-6 py-3">
                      CATEGORY
                    </th>
                    <th scope="col" className="px-6 py-3">
                      USER
                    </th>
                    <th scope="col" className="px-6 py-3">
                      STATUS
                    </th>
                    <th scope="col" className="px-6 py-3">
                      CREATED AT
                    </th>
                  </>
                ) : (
                  (title === "Users" || title === "Admins") && (
                    <>
                      <th scope="col" className="px-6 py-3">
                        NAME
                      </th>
                      <th scope="col" className="px-6 py-3">
                        EMAIL
                      </th>
                      <th scope="col" className="px-6 py-3">
                        PHONE
                      </th>
                      <th scope="col" className="px-6 py-3">
                        CREATED AT
                      </th>
                    </>
                  )
                )}
              </tr>
            </thead>

            <tbody>
              {filteredArray
                .sort(dynamicSort(sortBy))
                .slice(start, end)
                .map((item) => (
                  <tr key={item.id} className="bg-white border-b">
                    <td className="px-6 py-4 font-medium text-black">
                      {item.id}
                    </td>
                    {title === "Categories" && (
                      <>
                        <td className="px-6 py-4">{item.title || item.name}</td>
                        <td className="px-6 py-4">{item?.number}</td>
                      </>
                    )}
                    {title === "Complaints" && (
                      <>
                        <td className="px-6 py-4">{item.title || item.name}</td>
                        <td className="px-6 py-4">{item.category}</td>
                        <td className="px-6 py-4">{item.user}</td>
                        <td className="px-6 py-4">{item.status}</td>
                        <td className="px-6 py-4">{item.date_created}</td>
                      </>
                    )}
                    {(title === "Users" || title === "Admins") && (
                      <>
                        <td className="px-6 py-4">{item.name}</td>
                        <td className="px-6 py-4">{item.email}</td>
                        <td className="px-6 py-4">{item.phone}</td>
                        <td className="px-6 py-4">{item.createdAt}</td>
                      </>
                    )}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {pagination && (
        <div className="w-full flex flex-row">
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
